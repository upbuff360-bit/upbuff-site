// src/utils/bot-protection.ts
//
// Layered bot-protection helper for /api/contact and /api/demo-request.
// Layers (cheap -> expensive):
//   1. Honeypot field check         (free, catches naive bots)
//   2. Form-fill timing check       (free, catches script bots)
//   3. Origin / Referer check       (free, blocks direct curl hits)
//   4. Content heuristics           (free, catches SEO/crypto spam)
//   5. Cloudflare Turnstile verify  (strong, catches real bots)
//
// Returning a generic fake-success on block is intentional: it stops bots
// from probing which layer caught them.

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

// Minimum time in ms between form render and submission. Real humans take
// longer; headless bots submit in <500ms.
const MIN_FORM_FILL_MS = 1200;

// Update this list as your allowed front-ends expand (www variants, staging,
// Vercel previews, local dev).
const ALLOWED_ORIGINS = [
  'https://upbuff.com',
  'https://www.upbuff.com',
  'http://localhost:4321', // Astro dev
  'http://localhost:3000',
];

const SPAM_KEYWORDS = [
  'seo service',
  'seo services',
  'buy followers',
  'casino',
  'crypto invest',
  'loan offer',
  'viagra',
  // Cyrillic noise that commonly shows up in B2B spam
  'руб',
  'биткоин',
];

export interface BotCheckResult {
  ok: boolean;
  reason?: string;
}

export async function verifyFormSubmission(
  body: Record<string, string>,
  request: Request
): Promise<BotCheckResult> {
  // ── 1. Honeypot ──────────────────────────────────────────────
  // The `website` field is hidden from real users via CSS/aria.
  // Bots that auto-fill every input will populate it.
  if (body.website && String(body.website).trim() !== '') {
    return { ok: false, reason: 'honeypot' };
  }

  // ── 2. Timing check ──────────────────────────────────────────
  // `ts` is the client-side millisecond timestamp set when the form
  // was first rendered. Missing / too-recent = bot.
  const renderedAt = Number(body.ts);
  if (!renderedAt || Number.isNaN(renderedAt)) {
    return { ok: false, reason: 'no_ts' };
  }
  const elapsed = Date.now() - renderedAt;
  if (elapsed < MIN_FORM_FILL_MS) {
    return { ok: false, reason: 'too_fast' };
  }
  // Also reject absurdly old timestamps (> 6h) — likely replayed.
  if (elapsed > 6 * 60 * 60 * 1000) {
    return { ok: false, reason: 'stale_ts' };
  }

  // ── 3. Origin / Referer check ────────────────────────────────
  const origin =
    request.headers.get('origin') ?? request.headers.get('referer') ?? '';
  if (!ALLOWED_ORIGINS.some((o) => origin.startsWith(o))) {
    return { ok: false, reason: 'bad_origin' };
  }

  // ── 4. Content heuristics ────────────────────────────────────
  const text =
    `${body.name ?? ''} ${body.message ?? ''} ${body.email ?? ''}`.toLowerCase();
  const urlCount = (text.match(/https?:\/\//g) ?? []).length;
  if (urlCount > 2) {
    return { ok: false, reason: 'too_many_urls' };
  }
  if (SPAM_KEYWORDS.some((kw) => text.includes(kw))) {
    return { ok: false, reason: 'spam_keyword' };
  }

  // ── 5. Cloudflare Turnstile server-side verification ─────────
  const token = body['cf-turnstile-response'];
  if (!token) {
    return { ok: false, reason: 'no_captcha' };
  }

  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Fail-closed if the server is misconfigured. Better to drop a legit
    // submission than let bots through because envs aren't set.
    console.error('[bot-protection] TURNSTILE_SECRET_KEY is not set');
    return { ok: false, reason: 'captcha_misconfigured' };
  }

  const ip =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    '';

  const form = new URLSearchParams();
  form.append('secret', secret);
  form.append('response', String(token));
  if (ip) form.append('remoteip', ip);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      body: form,
    });
    const data = (await res.json()) as {
      success: boolean;
      'error-codes'?: string[];
    };
    if (!data.success) {
      return {
        ok: false,
        reason: `captcha_failed:${(data['error-codes'] ?? []).join(',')}`,
      };
    }
  } catch (err) {
    console.error('[bot-protection] Turnstile verify network error:', err);
    return { ok: false, reason: 'captcha_network_error' };
  }

  return { ok: true };
}