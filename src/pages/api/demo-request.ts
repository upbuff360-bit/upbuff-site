import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { verifyFormSubmission } from '../../utils/bot-protection';
import { LEAD_FORM_TURNSTILE_ENABLED } from '../../utils/lead-form-turnstile';
import { validateOptionalPhone } from '../../utils/phone-validation';
import { getCountryName } from '../../data/countryDialCodes';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      countryCode,
      phone,
      erp,
      focus,
      automation,
      monthlyDocuments,
      heardFrom,
      message,
    } = body as Record<string, string>;
    const referrer = body.referrer || request.headers.get('referer') || '';
    const leadSource = body.leadSource || referrer || 'Direct';
    const countryName = getCountryName(countryCode);
    const phoneCheck = validateOptionalPhone(countryCode, phone);

    if (!name?.trim() || !email?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name and email are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!phoneCheck.ok) {
      return new Response(
        JSON.stringify({ success: false, error: phoneCheck.error }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Apply the form checks and Cloudflare Turnstile verification.
    const check = await verifyFormSubmission(body as Record<string, string>, request, {
      skipTurnstile: !LEAD_FORM_TURNSTILE_ENABLED,
    });
    if (!check.ok) {
      console.warn(
        '[demo-request] blocked:',
        check.reason,
        'ip:',
        request.headers.get('x-forwarded-for') ?? 'unknown'
      );
      // Fake success — don't tell bots which layer caught them.
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Persist demo requests in the same private inbox as contact submissions.
    // Storage failures are logged but do not prevent the existing email flow.
    const storageUrl = import.meta.env.FASTAPI_BASE_URL;
    const storageKey = import.meta.env.CONTACT_STORAGE_API_KEY;
    if (storageUrl && storageKey) {
      try {
        const storageResponse = await fetch(`${storageUrl.replace(/\/+$/, '')}/internal/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Contact-Storage-Key': storageKey,
          },
          body: JSON.stringify({
            submissionType: 'demo',
            name,
            company,
            email,
            countryCode,
            country: countryName,
            phone: phoneCheck.fullPhone,
            product: 'Request a Demo',
            erp,
            focus,
            automation,
            monthlyDocuments,
            heardFrom,
            leadSource,
            referrer,
            message,
          }),
          signal: AbortSignal.timeout(5000),
        });
        if (!storageResponse.ok) {
          console.error('[demo-request] admin storage returned HTTP', storageResponse.status);
        }
      } catch (storageError) {
        console.error('[demo-request] admin storage unavailable; continuing email delivery:', storageError);
      }
    } else {
      console.warn('[demo-request] admin storage is not configured; continuing email delivery');
    }

    const transporter = nodemailer.createTransport({
      host:   import.meta.env.SMTP_HOST,
      port:   Number(import.meta.env.SMTP_PORT ?? 587),
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#ffffff;">
        <div style="background:#0a0a0a;border-radius:12px;padding:24px 28px;margin-bottom:28px;">
          <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0;">🎯 New Demo Request — UpBuff</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#374151;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;width:40%;color:#6b7280;">Full Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(name)}</td>
          </tr>
          ${company ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Company</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(company)}</td></tr>` : ''}
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Work Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="mailto:${escHtml(email)}" style="color:#6366f1;">${escHtml(email)}</a></td>
          </tr>
          ${phoneCheck.fullPhone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Phone Number</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="tel:${escHtml(phoneCheck.telHref)}" style="color:#6366f1;">${escHtml(phoneCheck.fullPhone)}</a></td></tr>` : ''}
          ${countryName ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Country</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(countryName)}</td></tr>` : ''}
          ${erp ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">ERP System</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(erp)}</td></tr>` : ''}
          ${focus ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Area of Interest</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(focus)}</td></tr>` : ''}
          ${automation ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Automation Scope</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(automation)}</td></tr>` : ''}
          ${monthlyDocuments ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Monthly Documents</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(monthlyDocuments)}</td></tr>` : ''}
          ${heardFrom ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Heard From</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(heardFrom)}</td></tr>` : ''}
          ${message?.trim() ? `<tr><td style="padding:10px 0;font-weight:600;vertical-align:top;color:#6b7280;">Message</td><td style="padding:10px 0;white-space:pre-wrap;">${escHtml(message)}</td></tr>` : ''}
        </table>
        <p style="margin-top:28px;font-size:12px;color:#9ca3af;text-align:center;">
          Submitted via upbuff.com/request-demo — ${new Date().toUTCString()}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from:    `"UpBuff Website" <${import.meta.env.SMTP_USER}>`,
      to:      (import.meta.env.SMTP_TO ?? import.meta.env.SMTP_USER).split(',').map((e: string) => e.trim()).join(', '),
      replyTo: email,
      subject: `Demo Request — ${name}${company ? `, ${company}` : ''} (${erp ?? 'ERP not specified'})`,
      html,
    });

    await transporter.sendMail({
      from:    `"UpBuff Technologies" <${import.meta.env.SMTP_USER}>`,
      to:      email,
      subject: 'We received your demo request — UpBuff',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;">
          <h2 style="font-size:22px;font-weight:700;color:#0a0a0a;margin:0 0 12px;">Thanks, ${escHtml(name)}!</h2>
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">
            We've received your demo request and a member of our team will be in touch within
            <strong>one business day</strong> to confirm a time.
          </p>
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">
            You can also reach us directly at
            <a href="mailto:sales@upbuff.com" style="color:#6366f1;">sales@upbuff.com</a>.
          </p>
          <p style="color:#6b7280;font-size:13px;margin:0;">— The UpBuff Team</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('[demo-request] SMTP error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
