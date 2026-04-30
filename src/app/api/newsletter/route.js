import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi girin." },
        { status: 400 }
      );
    }

    // Google OAuth2 credentials from user's AI_Satis_Asistani setup
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID_NEWSLETTER;

    if (!clientId || !clientSecret || !refreshToken || !spreadsheetId) {
      console.warn("Google OAuth credentials missing. Simulating success.");
      return NextResponse.json(
        { success: true, message: "Abonelik başarılı (Simüle edildi)" },
        { status: 200 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });

    const sheets = google.sheets({ version: "v4", auth: oauth2Client });
    
    // Format timestamp like DD/MM/YYYY HH:MM:SS (Turkey time)
    const now = new Date();
    const timestamp = now.toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

    // Append to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sayfa1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, email, source || "Bilinmiyor"]],
      },
    });

    return NextResponse.json(
      { success: true, message: "Abonelik başarılı" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "İşlem sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
