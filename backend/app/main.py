from __future__ import annotations

import asyncio
import base64
import hashlib
import hmac
import json
import os
import secrets
import time
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Annotated, Any, Literal, Optional
from urllib.parse import urlencode
from urllib.request import Request as UrlRequest, urlopen

from dotenv import load_dotenv
from fastapi import Depends, FastAPI, Header, HTTPException, Request, Response, status
from pydantic import BaseModel, ConfigDict, Field
from bson import ObjectId
from bson.errors import InvalidId
from pymongo import DESCENDING, AsyncMongoClient

load_dotenv(Path(__file__).resolve().parents[1] / ".env")


def required_env(name: str) -> str:
    value = os.getenv(name, "").strip()
    if not value:
        raise RuntimeError(f"{name} must be configured")
    return value


@asynccontextmanager
async def lifespan(app: FastAPI):
    client = AsyncMongoClient(required_env("MONGODB_URI"), serverSelectionTimeoutMS=5000)
    await client.admin.command("ping")
    database = client[os.getenv("MONGODB_DATABASE", "upbuff")]
    submissions = database["contact_submissions"]
    await submissions.create_index([("submitted_at", DESCENDING), ("_id", DESCENDING)])
    await submissions.create_index([("deleted_at", DESCENDING), ("_id", DESCENDING)])
    await submissions.create_index([("deleted_at", DESCENDING), ("is_read", 1), ("submission_type", 1)])
    app.state.mongo_client = client
    app.state.submissions = submissions
    try:
        yield
    finally:
        await client.close()


app = FastAPI(title="UpBuff Contact Admin API", docs_url=None, redoc_url=None, lifespan=lifespan)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore", str_strip_whitespace=True)

    name: str = Field(min_length=1, max_length=200)
    email: str = Field(min_length=3, max_length=320)
    submissionType: Literal["contact", "demo", "consultation"] = "contact"
    countryCode: str = Field(default="", max_length=12)
    country: str = Field(default="", max_length=100)
    phone: str = Field(default="", max_length=40)
    company: str = Field(default="", max_length=200)
    product: str = Field(default="", max_length=200)
    erp: str = Field(default="", max_length=200)
    focus: str = Field(default="", max_length=300)
    automation: str = Field(default="", max_length=500)
    monthlyDocuments: str = Field(default="", max_length=100)
    heardFrom: str = Field(default="", max_length=200)
    leadSource: str = Field(default="", max_length=300)
    referrer: str = Field(default="", max_length=2000)
    message: str = Field(default="", max_length=5000)


class LoginRequest(BaseModel):
    model_config = ConfigDict(extra="forbid", str_strip_whitespace=True)

    username: str = Field(min_length=1, max_length=120)
    password: str = Field(min_length=1, max_length=500)
    turnstileToken: str = Field(min_length=1, max_length=2048)


class ContactedUpdate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    contacted: bool


class UsefulUpdate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    useful: bool


def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode("ascii")


def create_session(username: str) -> str:
    payload = b64url(json.dumps({"sub": username, "exp": int(time.time()) + 12 * 60 * 60}).encode())
    signature = hmac.new(required_env("ADMIN_SESSION_SECRET").encode(), payload.encode(), hashlib.sha256).digest()
    return f"{payload}.{b64url(signature)}"


def verify_turnstile_token(secret: str, token: str) -> bool:
    data = urlencode({"secret": secret, "response": token}).encode()
    request = UrlRequest(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        method="POST",
    )
    with urlopen(request, timeout=5) as result:
        payload = json.load(result)
        return isinstance(payload, dict) and payload.get("success") is True


async def require_login_turnstile(token: str) -> None:
    secret = os.getenv("TURNSTILE_SECRET_KEY", "").strip()
    if not secret:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Sign in is temporarily unavailable.")
    try:
        verified = await asyncio.to_thread(verify_turnstile_token, secret, token)
    except (OSError, ValueError, TypeError):
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Verification is temporarily unavailable.") from None
    if not verified:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Verification failed. Please try again.")


def valid_session(token: Optional[str]) -> bool:
    if not token or "." not in token:
        return False
    payload, signature = token.rsplit(".", 1)
    expected = b64url(hmac.new(required_env("ADMIN_SESSION_SECRET").encode(), payload.encode(), hashlib.sha256).digest())
    if not hmac.compare_digest(signature, expected):
        return False
    try:
        padded = payload + "=" * (-len(payload) % 4)
        session = json.loads(base64.urlsafe_b64decode(padded))
        return session.get("sub") == required_env("ADMIN_USERNAME") and int(session.get("exp", 0)) > int(time.time())
    except (ValueError, TypeError, json.JSONDecodeError):
        return False


async def require_admin(request: Request) -> None:
    if not valid_session(request.cookies.get("upbuff_admin_session")):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Please sign in.")


def serialize_submission(document: dict[str, Any]) -> dict[str, Any]:
    submitted_at = document.get("submitted_at")
    if isinstance(submitted_at, datetime):
        if submitted_at.tzinfo is None:
            submitted_at = submitted_at.replace(tzinfo=timezone.utc)
        submitted_at = submitted_at.astimezone(timezone.utc).isoformat()
    deleted_at = document.get("deleted_at")
    if isinstance(deleted_at, datetime):
        if deleted_at.tzinfo is None:
            deleted_at = deleted_at.replace(tzinfo=timezone.utc)
        deleted_at = deleted_at.astimezone(timezone.utc).isoformat()
    return {
        "id": str(document.get("_id", "")),
        "submissionType": str(document.get("submission_type", document.get("submissionType", "contact"))),
        "submittedAt": str(submitted_at or ""),
        "deletedAt": str(deleted_at or ""),
        "name": str(document.get("name", "")),
        "email": str(document.get("email", "")),
        "company": str(document.get("company", "")),
        "country": str(document.get("country", "")),
        "phone": str(document.get("phone", "")),
        "product": str(document.get("product", "")),
        "erp": str(document.get("erp", "")),
        "focus": str(document.get("focus", "")),
        "automation": str(document.get("automation", "")),
        "monthlyDocuments": str(document.get("monthlyDocuments", "")),
        "heardFrom": str(document.get("heardFrom", "")),
        "leadSource": str(document.get("leadSource", "")),
        "referrer": str(document.get("referrer", "")),
        "isRead": bool(document.get("is_read", True)),
        "contacted": document.get("contacted"),
        "useful": document.get("useful"),
        "message": str(document.get("message", "")),
    }


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/internal/contact", status_code=status.HTTP_201_CREATED)
async def save_contact(
    submission: ContactSubmission,
    request: Request,
    storage_key: Annotated[Optional[str], Header(alias="X-Contact-Storage-Key")] = None,
) -> dict[str, bool]:
    expected_key = required_env("CONTACT_STORAGE_API_KEY")
    if not storage_key or not secrets.compare_digest(storage_key, expected_key):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    document = submission.model_dump()
    document["submission_type"] = submission.submissionType
    document["submitted_at"] = datetime.now(timezone.utc)
    document["is_read"] = False
    document["read_at"] = None
    document["contacted"] = None
    document["contacted_at"] = None
    document["useful"] = None
    document["deleted_at"] = None
    document["source"] = {
        "contact": "contact-page",
        "demo": "request-demo-page",
        "consultation": "sap-consultation-page",
    }[submission.submissionType]
    await request.app.state.submissions.insert_one(document)
    return {"success": True}


@app.post("/admin/login")
async def login(credentials: LoginRequest, response: Response) -> dict[str, bool]:
    await require_login_turnstile(credentials.turnstileToken)
    expected_username = required_env("ADMIN_USERNAME")
    expected_password = required_env("ADMIN_PASSWORD")
    if not (
        hmac.compare_digest(credentials.username, expected_username)
        and hmac.compare_digest(credentials.password, expected_password)
    ):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password.")

    response.set_cookie(
        key="upbuff_admin_session",
        value=create_session(expected_username),
        max_age=12 * 60 * 60,
        httponly=True,
        secure=os.getenv("COOKIE_SECURE", "true").lower() == "true",
        samesite="strict",
        path="/api/admin",
    )
    response.headers["Cache-Control"] = "no-store"
    return {"success": True}


@app.post("/admin/logout", dependencies=[Depends(require_admin)])
async def logout(response: Response) -> dict[str, bool]:
    response.delete_cookie(
        key="upbuff_admin_session",
        httponly=True,
        secure=os.getenv("COOKIE_SECURE", "true").lower() == "true",
        samesite="strict",
        path="/api/admin",
    )
    response.headers["Cache-Control"] = "no-store"
    return {"success": True}


def submission_type_filter(kind: Literal["contact", "demo", "consultation"]) -> dict[str, Any]:
    legacy_contact_type = {"$or": [
        {"submission_type": "contact"},
        {"submission_type": {"$exists": False}},
    ]}
    consultation_product = {"product": {"$regex": r"^Quick Fix(?:\s|$)", "$options": "i"}}
    if kind == "demo":
        return {"submission_type": "demo"}
    if kind == "consultation":
        return {"$or": [
            {"submission_type": "consultation"},
            {"$and": [legacy_contact_type, consultation_product]},
        ]}
    # Keep older Quick Fix inquiries in the consultation listing.
    return {"$and": [legacy_contact_type, {"$nor": [consultation_product]}]}


@app.get("/admin/submissions", dependencies=[Depends(require_admin)])
async def list_submissions(
    request: Request,
    limit: int = 12,
    submission_type: Optional[Literal["contact", "demo", "consultation"]] = None,
    folder: Literal["inbox", "trash"] = "inbox",
    before_at: Optional[datetime] = None,
    before_id: Optional[str] = None,
    include_counts: bool = False,
) -> dict[str, Any]:
    limit = max(1, min(limit, 500))
    type_query = submission_type_filter(submission_type) if submission_type else {}

    sort_field = "deleted_at" if folder == "trash" else "submitted_at"
    folder_query = {"deleted_at": {"$type": "date"}} if folder == "trash" else {"deleted_at": None}
    base_query = {"$and": [type_query, folder_query]} if type_query else folder_query

    if (before_at is None) != (before_id is None):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incomplete page cursor.")

    query = base_query
    if before_at is not None and before_id is not None:
        try:
            object_id = ObjectId(before_id)
        except (InvalidId, TypeError):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid page cursor.")
        page_query = {"$or": [
            {sort_field: {"$lt": before_at}},
            {sort_field: before_at, "_id": {"$lt": object_id}},
        ]}
        query = {"$and": [base_query, page_query]}

    collection = request.app.state.submissions
    cursor = collection.find(query).sort([(sort_field, DESCENDING), ("_id", DESCENDING)]).limit(limit + 1)
    documents = await cursor.to_list(length=limit + 1)
    result: dict[str, Any] = {
        "submissions": [serialize_submission(document) for document in documents[:limit]],
        "hasMore": len(documents) > limit,
    }
    if include_counts:
        result["total"] = await collection.count_documents(base_query)
        result["unread"] = (
            await collection.count_documents({"$and": [base_query, {"is_read": False}]})
            if folder == "inbox" else 0
        )
        unread_views: list[str] = []
        for kind in ("contact", "demo", "consultation"):
            if kind == submission_type and folder == "inbox":
                if result["unread"] > 0:
                    unread_views.append(kind)
                continue
            unread_query = {"$and": [
                submission_type_filter(kind),
                {"deleted_at": None},
                {"is_read": False},
            ]}
            if await collection.find_one(unread_query, {"_id": 1}):
                unread_views.append(kind)
        result["unreadViews"] = unread_views
    return result


@app.post("/admin/submissions/{submission_id}/read", dependencies=[Depends(require_admin)])
async def mark_submission_read(submission_id: str, request: Request) -> dict[str, bool]:
    try:
        object_id = ObjectId(submission_id)
    except (InvalidId, TypeError):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid submission ID.")

    result = await request.app.state.submissions.update_one(
        {"_id": object_id},
        {"$set": {"is_read": True, "read_at": datetime.now(timezone.utc)}},
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Submission not found.")
    return {"success": True}


@app.post("/admin/submissions/{submission_id}/contacted", dependencies=[Depends(require_admin)])
async def update_submission_contacted(
    submission_id: str, update: ContactedUpdate, request: Request
) -> dict[str, bool]:
    try:
        object_id = ObjectId(submission_id)
    except (InvalidId, TypeError):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid submission ID.")

    result = await request.app.state.submissions.update_one(
        {"_id": object_id},
        {"$set": {
            "contacted": update.contacted,
            "contacted_at": datetime.now(timezone.utc) if update.contacted else None,
        }},
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Submission not found.")
    return {"success": True}


@app.post("/admin/submissions/{submission_id}/useful", dependencies=[Depends(require_admin)])
async def update_submission_useful(
    submission_id: str, update: UsefulUpdate, request: Request
) -> dict[str, bool]:
    try:
        object_id = ObjectId(submission_id)
    except (InvalidId, TypeError):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid submission ID.")

    result = await request.app.state.submissions.update_one(
        {"_id": object_id},
        {"$set": {"useful": update.useful}},
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Submission not found.")
    return {"success": True}


@app.delete("/admin/submissions/{submission_id}", dependencies=[Depends(require_admin)])
async def delete_submission(submission_id: str, request: Request) -> dict[str, bool]:
    try:
        object_id = ObjectId(submission_id)
    except (InvalidId, TypeError):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid submission ID.")

    result = await request.app.state.submissions.update_one(
        {"_id": object_id, "deleted_at": None},
        {"$set": {"deleted_at": datetime.now(timezone.utc)}},
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Submission not found.")
    return {"success": True}


@app.post("/admin/submissions/{submission_id}/restore", dependencies=[Depends(require_admin)])
async def restore_submission(submission_id: str, request: Request) -> dict[str, bool]:
    try:
        object_id = ObjectId(submission_id)
    except (InvalidId, TypeError):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid submission ID.")

    result = await request.app.state.submissions.update_one(
        {"_id": object_id, "deleted_at": {"$type": "date"}},
        {"$set": {"deleted_at": None}},
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Submission not found in Trash.")
    return {"success": True}
