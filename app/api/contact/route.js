import { NextResponse } from 'next/server';

const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';
const TO_EMAIL = 'pakisakac@gmail.com';
const FROM_EMAIL = 'pakisakac@gmail.com';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const res = await fetch(BREVO_URL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio Contact', email: FROM_EMAIL },
        replyTo: { name: name.trim(), email: email.trim() },
        to: [{ email: TO_EMAIL, name: 'Nemanja Nakomčić' }],
        subject: subject?.trim() || `Portfolio contact from ${name.trim()}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;color:#333">
            <h2 style="margin-bottom:16px">New message from portfolio</h2>
            <p><strong>Name:</strong> ${name.trim()}</p>
            <p><strong>Email:</strong> ${email.trim()}</p>
            ${subject?.trim() ? `<p><strong>Subject:</strong> ${subject.trim()}</p>` : ''}
            <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${message.trim()}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error('Brevo error:', err);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
