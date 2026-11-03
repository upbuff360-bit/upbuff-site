/**
 * POST /api/clarior-lead — both Clarior forms on /clarior.
 *
 *   formType "notify"  launch-update signup   (work email required)
 *   formType "demo"    demo / program request (name, email, company, country required)
 *
 * For every real submission it:
 *   1. emails the lead to the sales team (SMTP_TO), right away;
 *   2. sends the visitor an automatic acknowledgment;
 *   3. appends one row to a Google Sheet, if CLARIOR_SHEET_WEBHOOK_URL is set.
 *
 * Stored with every lead: lead source, campaign + all UTM parameters,
 * landing page version (A-prelaunch / B-launch), submission timestamp and
 * consent status. Marketing consent is its own column and is never implied
 * by a demo request.
 *
 * ── Google Sheet setup (one time) ────────────────────────────────────────
 * 1. New Google Sheet → Extensions → Apps Script → paste:
 *
 *      function doPost(e) {
 *        var d = JSON.parse(e.postData.contents);
 *        var name = d.formType === 'demo' ? 'Demo requests' : 'Launch signups';
 *        var ss = SpreadsheetApp.getActiveSpreadsheet();
 *        var sh = ss.getSheetByName(name) || ss.insertSheet(name);
 *        var keys = Object.keys(d);
 *        if (sh.getLastRow() === 0) sh.appendRow(keys);
 *        var head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
 *        sh.appendRow(head.map(function (k) { return d[k] || ''; }));
 *        return ContentService.createTextOutput('ok');
 *      }
 *
 * 2. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone.
 * 3. Put the web-app URL in Vercel as CLARIOR_SHEET_WEBHOOK_URL and redeploy.
 *    File → Download → Microsoft Excel gives you the .xlsx at any time.
 *
 * Optional: CLARIOR_PREMIERE_URL — when set, the launch-signup confirmation
 * email includes the premiere link.
 */
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { verifyFormSubmission } from '../../utils/bot-protection';

export const prerender = false;

const LAUNCH_TEXT = 'November 8, 2026 at 6:00 PM IST';

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as Record<string, string>;
    const s = (k: string) => String(body[k] ?? '').trim().slice(0, 500);

    const formType = s('formType') === 'demo' ? 'demo' : 'notify';
    const email = s('email');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, error: 'Please enter a valid work email.' }, 400);
    }
    if (formType === 'demo' && (!s('name') || !s('company') || !s('country'))) {
      return json({ success: false, error: 'Please complete all required fields.' }, 400);
    }

    // ── Bot protection (honeypot + timing + origin + content + Turnstile) ──
    const check = await verifyFormSubmission(body, request);
    if (!check.ok) {
      console.warn('[clarior-lead] blocked:', check.reason, 'ip:', request.headers.get('x-forwarded-for') ?? 'unknown');
      return json({ success: true }); // fake success — don't reveal which layer caught it
    }

    const lead: Record<string, string> = {
      submittedAt: new Date().toISOString(),
      formType,
      pageVersion: s('pageVersion'),
      email,
      name: s('name'),
      company: s('company'),
      country: s('country'),
      role: s('role'),
      usesSapB1: s('usesSapB1'),
      intent: formType === 'demo' ? s('intent') || 'Book a product demonstration' : '',
      launchNotificationConsent: formType === 'notify' ? 'yes' : '',
      marketingConsent: s('marketingConsent') === 'yes' ? 'yes' : 'no',
      leadSource: s('utm_source') || s('referrer') || 'direct',
      campaign: s('utm_campaign'),
      utm_source: s('utm_source'),
      utm_medium: s('utm_medium'),
      utm_campaign: s('utm_campaign'),
      utm_term: s('utm_term'),
      utm_content: s('utm_content'),
      referrer: s('referrer'),
      landingUrl: s('landingUrl'),
    };

    // ── 3. Google Sheet (never blocks the visitor) ──
    const sheetUrl = import.meta.env.CLARIOR_SHEET_WEBHOOK_URL;
    const sheetWrite = sheetUrl
      ? fetch(sheetUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) })
          .then((r) => { if (!r.ok) console.error('[clarior-lead] sheet HTTP', r.status); })
          .catch((err) => console.error('[clarior-lead] sheet error:', err))
      : Promise.resolve();
    await sheetWrite; // saved before email, so a mail outage never loses a lead

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: Number(import.meta.env.SMTP_PORT ?? 587),
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: { user: import.meta.env.SMTP_USER, pass: import.meta.env.SMTP_PASS },
    });
    // Match /api/contact: deliver team notifications to the configured SMTP_TO list.
    const teamRecipient = (import.meta.env.SMTP_TO ?? import.meta.env.SMTP_USER)
      .split(',')
      .map((recipient: string) => recipient.trim())
      .join(', ');

    // ── 1. Lead to the sales team ──
    const rows = Object.entries(lead)
      .filter(([, v]) => v)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;font-weight:600;width:40%;color:#6b7280;">${escHtml(k)}</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;">${escHtml(v)}</td></tr>`
      )
      .join('');
    const teamTitle = formType === 'demo' ? `Clarior — ${lead.intent}` : 'Clarior — Launch signup';

    await transporter.sendMail({
      from: `"UpBuff Website" <${import.meta.env.SMTP_USER}>`,
      to: teamRecipient,
      replyTo: email,
      subject: `${teamTitle}: ${lead.name || email}${lead.company ? `, ${lead.company}` : ''}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#ffffff;">
          <div style="background:#0a0a0a;border-radius:12px;padding:24px 28px;margin-bottom:28px;">
            <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0;">${escHtml(teamTitle)}</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;color:#374151;">${rows}</table>
          <p style="margin-top:28px;font-size:12px;color:#9ca3af;text-align:center;">Submitted via upbuff.com/clarior</p>
        </div>`,
    });

    // ── 2. Acknowledgment to the visitor ──
    const hi = lead.name ? `Hi ${escHtml(lead.name.split(' ')[0])},` : 'Hello,';
    const premiere = import.meta.env.CLARIOR_PREMIERE_URL;
    const userHtml =
      formType === 'notify'
        ? `
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">You’re on the list. We’ll notify you when Clarior is unveiled.</p>
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;"><strong>Global unveiling:</strong> ${LAUNCH_TEXT}</p>
          ${premiere ? `<p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;"><strong>Premiere link:</strong> <a href="${escHtml(premiere)}" style="color:#6366f1;">${escHtml(premiere)}</a></p>` : '<p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">Watch for our invitation.</p>'}`
        : `
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">We’ve received your request (<strong>${escHtml(lead.intent)}</strong>). A member of our team will be in touch within <strong>one business day</strong>.</p>
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">You can also reach us directly at <a href="mailto:sales@upbuff.com" style="color:#6366f1;">sales@upbuff.com</a>.</p>`;

    await transporter.sendMail({
      from: `"UpBuff Technologies" <${import.meta.env.SMTP_USER}>`,
      to: email,
      subject: formType === 'notify' ? 'You’re on the list — Clarior unveiling, November 8' : 'We received your Clarior request — UpBuff',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;">
          <h2 style="font-size:22px;font-weight:700;color:#0a0a0a;margin:0 0 12px;">${hi}</h2>
          ${userHtml}
          <p style="color:#6b7280;font-size:13px;margin:24px 0 0;">Clarior — An innovation from UpBuff Technologies Pvt Ltd.</p>
        </div>`,
    });

    return json({ success: true });
  } catch (err) {
    console.error('[clarior-lead] error:', err);
    return json({ success: false, error: 'Failed to send. Please try again.' }, 500);
  }
};

function escHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
