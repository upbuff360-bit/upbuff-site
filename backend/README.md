# Contact submissions service

FastAPI service for storing contact form submissions in MongoDB and serving the private admin inbox. Deploy this service separately from the Astro/Vercel site. The Astro contact API calls `/internal/contact` only after its existing validation and bot checks; the existing team and customer emails continue to be sent by Astro.

## Configure

Set these environment variables on the FastAPI host:

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string (use MongoDB Atlas or another reachable MongoDB deployment). |
| `MONGODB_DATABASE` | Database name; defaults to `upbuff`. |
| `CONTACT_STORAGE_API_KEY` | Long random shared secret used only for the Astro-to-FastAPI storage request. |
| `ADMIN_USERNAME` | Single admin login username. |
| `ADMIN_PASSWORD` | Strong single admin login password. |
| `ADMIN_SESSION_SECRET` | Separate long random secret used to sign 12-hour admin sessions. |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret used to verify admin login challenges. |
| `COOKIE_SECURE` | Keep `true` in production HTTPS. Set `false` only for local HTTP development. |

Also set `FASTAPI_BASE_URL`, `PUBLIC_TURNSTILE_SITE_KEY`, and the same `CONTACT_STORAGE_API_KEY` in the Astro/Vercel environment. `FASTAPI_BASE_URL` is the HTTPS origin of this service, without a trailing slash. The admin login uses `PUBLIC_TURNSTILE_SITE_KEY` to show the challenge and sends its token to FastAPI, which verifies it with `TURNSTILE_SECRET_KEY` before checking credentials. Keep secret values in the hosting providers' environment-variable settings; do not commit real credentials.

## Run locally

Copy `.env.example` to `.env` and fill in the blank values. The FastAPI app loads `backend/.env` automatically; keep the real `.env` file private.

```sh
cd backend
cp .env.example .env
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The service expects MongoDB to be reachable at startup. Set `COOKIE_SECURE=false` when testing the admin UI over local HTTP. Set Astro's `FASTAPI_BASE_URL` to `http://localhost:8000` and configure the same storage key in both services. Add your Turnstile site's `PUBLIC_TURNSTILE_SITE_KEY` to Astro's environment and its matching `TURNSTILE_SECRET_KEY` to `backend/.env`; allow your local hostnames in the Turnstile widget settings.

The sign-in page is `/admin/login`. Unauthenticated visits to an admin listing redirect there, and sign-out returns there. The private inbox has separate listings at `/admin/quick-contact`, `/admin/request-demo`, and `/admin/sap-consultation` on the Astro site. Each initially loads 12 submissions and requests 3 more when the list is scrolled; MongoDB retains all saved submissions. The admin APIs are proxied through the Astro site's same origin so the session cookie remains HttpOnly and same-site.

Admins can record whether a lead has been contacted and whether it is useful. Both choices start unselected for new submissions. Deleting a submission moves it to that listing's Trash tab, where it can be restored to the inbox. These states are stored with the submission in MongoDB.
