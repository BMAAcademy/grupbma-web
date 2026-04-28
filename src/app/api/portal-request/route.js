import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { company, name, phone, email } = body;

    if (!company || !name || !phone || !email) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'emratalay@gmail.com',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a1a; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #e94560, #6c3ce9); padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">🏢 Yeni Portal Kayıt Talebi</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0;">grupbma.com.tr/portal üzerinden gönderildi</p>
        </div>
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; color: #888; width: 140px;">Şirket Adı</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; font-weight: 600; color: #fff;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; color: #888;">Yetkili Kişi</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; font-weight: 600; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; color: #888;">Telefon</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a3e; font-weight: 600; color: #fff;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888;">Kurumsal E-posta</td>
              <td style="padding: 12px 0; font-weight: 600; color: #00d4ff;">${email}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #111130; border-radius: 8px; border-left: 3px solid #e94560;">
            <p style="margin: 0; font-size: 13px; color: #888;">📅 Talep Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</p>
            <p style="margin: 6px 0 0; font-size: 13px; color: #e94560; font-weight: 600;">⚡ Bu kullanıcıya portal erişimi tanımlanması bekleniyor.</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: '"Grup BMA Portal" <emratalay@gmail.com>',
      to: 'info@grupbma.com.tr',
      replyTo: email,
      subject: `🏢 Portal Kayıt Talebi: ${company} — ${name}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Portal kayıt e-posta hatası:', error);
    return NextResponse.json(
      { error: 'E-posta gönderilemedi' },
      { status: 500 }
    );
  }
}
