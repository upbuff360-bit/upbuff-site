import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, erp, focus, message } = body as Record<string, string>;

    if (!name?.trim() || !email?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name and email are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Work Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="mailto:${escHtml(email)}" style="color:#6366f1;">${escHtml(email)}</a></td>
          </tr>
          ${erp ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">ERP System</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(erp)}</td></tr>` : ''}
          ${focus ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Area of Interest</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(focus)}</td></tr>` : ''}
          ${message?.trim() ? `<tr><td style="padding:10px 0;font-weight:600;vertical-align:top;color:#6b7280;">Message</td><td style="padding:10px 0;white-space:pre-wrap;">${escHtml(message)}</td></tr>` : ''}
        </table>
        <p style="margin-top:28px;font-size:12px;color:#9ca3af;text-align:center;">
          Submitted via upbuff.com/request-demo — ${new Date().toUTCString()}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from:    `"UpBuff Website" <${import.meta.env.SMTP_USER}>`,
      to:      import.meta.env.SMTP_TO ?? import.meta.env.SMTP_USER,
      replyTo: email,
      subject: `Demo Request — ${name} (${erp ?? 'ERP not specified'})`,
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