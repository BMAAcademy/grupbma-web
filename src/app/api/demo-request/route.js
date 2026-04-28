import { NextResponse } from 'next/server';

// Gmail API ile doğrudan e-posta gönderimi (OAuth2 token refresh dahil)
async function getAccessToken() {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Token refresh failed: ' + JSON.stringify(data));
  return data.access_token;
}

function buildRawEmail(to, replyTo, subject, htmlBody) {
  const boundary = 'boundary_bma_' + Date.now();
  const encodedSubject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;

  const messageParts = [
    `From: "Grup BMA" <emratalay@gmail.com>`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodedSubject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset="UTF-8"`,
    `Content-Transfer-Encoding: base64`,
    ``,
    Buffer.from(htmlBody).toString('base64'),
  ];

  const raw = messageParts.join('\r\n');
  return Buffer.from(raw)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, product } = body;

    if (!name || !phone || !email || !company || !product) {
      return NextResponse.json({ error: 'Tüm alanlar zorunludur' }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a1a; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #6c3ce9, #00d4ff); padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">🚀 Yeni Demo Talebi</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0;">grupbma.com.tr üzerinden gönderildi</p>
        </div>
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; color: #888; width: 140px;">Ad Soyad</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; font-weight: 600; color: #fff;">${name}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; color: #888;">Telefon</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; font-weight: 600; color: #fff;">${phone}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; color: #888;">E-posta</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; font-weight: 600; color: #00d4ff;">${email}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; color: #888;">Şirket</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; font-weight: 600; color: #fff;">${company}</td></tr>
            <tr><td style="padding: 12px 0; color: #888;">İlgilenilen Ürün</td><td style="padding: 12px 0; font-weight: 600; color: #6c3ce9;">${product}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #111130; border-radius: 8px; border-left: 3px solid #6c3ce9;">
            <p style="margin: 0; font-size: 13px; color: #888;">📅 Talep Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</p>
          </div>
        </div>
      </div>
    `;

    const raw = buildRawEmail('info@grupbma.com.tr', email, `🚀 Yeni Demo Talebi: ${name} — ${product}`, htmlBody);

    const gmailRes = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw }),
    });

    if (!gmailRes.ok) {
      const errData = await gmailRes.json();
      throw new Error(JSON.stringify(errData));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo talep e-posta hatası:', error);
    return NextResponse.json({ error: 'E-posta gönderilemedi' }, { status: 500 });
  }
}
