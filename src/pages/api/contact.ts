import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, product, country, message } = body as Record<string, string>;

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
          <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0;">📬 New Contact Form Submission — UpBuff</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#374151;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;width:40%;color:#6b7280;">Full Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="mailto:${escHtml(email)}" style="color:#6366f1;">${escHtml(email)}</a></td>
          </tr>
          ${product ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Product Interest</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(product)}</td></tr>` : ''}
          ${country ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#6b7280;">Country</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">${escHtml(country)}</td></tr>` : ''}
          ${message?.trim() ? `<tr><td style="padding:10px 0;font-weight:600;vertical-align:top;color:#6b7280;">Message</td><td style="padding:10px 0;white-space:pre-wrap;">${escHtml(message)}</td></tr>` : ''}
        </table>
        <p style="margin-top:28px;font-size:12px;color:#9ca3af;text-align:center;">
          Submitted via upbuff.com/contact — ${new Date().toUTCString()}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from:    `"UpBuff Website" <${import.meta.env.SMTP_USER}>`,
      to:      (import.meta.env.SMTP_TO ?? import.meta.env.SMTP_USER).split(',').map((e: string) => e.trim()).join(', '),
      replyTo: email,
      subject: `Contact: ${name}${product ? ` — ${product}` : ''}`,
      html,
    });

    await transporter.sendMail({
      from:    `"UpBuff Technologies" <${import.meta.env.SMTP_USER}>`,
      to:      email,
      subject: 'Thanks for reaching out — UpBuff',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;">
          <h2 style="font-size:22px;font-weight:700;color:#0a0a0a;margin:0 0 12px;">Thanks, ${escHtml(name)}!</h2>
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">
            We've received your message and will get back to you within <strong>24 business hours</strong>.
          </p>
          <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">
            For urgent enquiries, call us at <a href="tel:+919819982562" style="color:#6366f1;">+91 98199 82562</a>
            or email <a href="mailto:info@upbuff.com" style="color:#6366f1;">info@upbuff.com</a>.
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
    console.error('[contact] SMTP error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

function escHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}