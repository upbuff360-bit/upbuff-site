const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MIN_FORM_FILL_MS = 1200;
const ALLOWED_ORIGINS = [
  "https://upbuff.com",
  "https://www.upbuff.com",
  "http://localhost:4321",
  // Astro dev
  "http://localhost:3000"
];
const SPAM_KEYWORDS = [
  "seo service",
  "seo services",
  "buy followers",
  "casino",
  "crypto invest",
  "loan offer",
  "viagra",
  // Cyrillic noise that commonly shows up in B2B spam
  "руб",
  "биткоин"
];
async function verifyFormSubmission(body, request) {
  if (body.website && String(body.website).trim() !== "") {
    return { ok: false, reason: "honeypot" };
  }
  const renderedAt = Number(body.ts);
  if (!renderedAt || Number.isNaN(renderedAt)) {
    return { ok: false, reason: "no_ts" };
  }
  const elapsed = Date.now() - renderedAt;
  if (elapsed < MIN_FORM_FILL_MS) {
    return { ok: false, reason: "too_fast" };
  }
  if (elapsed > 6 * 60 * 60 * 1e3) {
    return { ok: false, reason: "stale_ts" };
  }
  const origin = request.headers.get("origin") ?? request.headers.get("referer") ?? "";
  if (!ALLOWED_ORIGINS.some((o) => origin.startsWith(o))) {
    return { ok: false, reason: "bad_origin" };
  }
  const text = `${body.name ?? ""} ${body.message ?? ""} ${body.email ?? ""}`.toLowerCase();
  const urlCount = (text.match(/https?:\/\//g) ?? []).length;
  if (urlCount > 2) {
    return { ok: false, reason: "too_many_urls" };
  }
  if (SPAM_KEYWORDS.some((kw) => text.includes(kw))) {
    return { ok: false, reason: "spam_keyword" };
  }
  const token = body["cf-turnstile-response"];
  if (!token) {
    return { ok: false, reason: "no_captcha" };
  }
  const secret = "0x4AAAAAADBpbKLQ5a4hjhE9SmwkkPkelcM";
  const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const form = new URLSearchParams();
  form.append("secret", secret);
  form.append("response", String(token));
  if (ip) form.append("remoteip", ip);
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: form
    });
    const data = await res.json();
    if (!data.success) {
      return {
        ok: false,
        reason: `captcha_failed:${(data["error-codes"] ?? []).join(",")}`
      };
    }
  } catch (err) {
    console.error("[bot-protection] Turnstile verify network error:", err);
    return { ok: false, reason: "captcha_network_error" };
  }
  return { ok: true };
}

export { verifyFormSubmission as v };
