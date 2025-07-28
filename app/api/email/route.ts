import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html, customerName, partnerName } = await request.json()

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const emailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AşkSitesi - Sipariş Onayı</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; }
            .button { display: inline-block; background: #ec4899; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
            .heart { color: #ec4899; font-size: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1><span class="heart">💕</span> AşkSitesi</h1>
                <p>Aşkınızı dijital dünyaya taşıyoruz</p>
            </div>
            <div class="content">
                <h2>Merhaba ${customerName} & ${partnerName}!</h2>
                <p>Aşk siteniz için verdiğiniz sipariş başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.</p>
                
                <h3>Sipariş Detayları:</h3>
                <ul>
                    <li><strong>Çift:</strong> ${customerName} & ${partnerName}</li>
                    <li><strong>Email:</strong> ${to}</li>
                    <li><strong>Durum:</strong> İşleme Alındı</li>
                </ul>

                <p>Siteniz hazır olduğunda size özel link gönderilecektir.</p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${process.env.NEXT_PUBLIC_APP_URL}" class="button">Siteyi Ziyaret Et</a>
                </div>

                <p>Herhangi bir sorunuz varsa bizimle iletişime geçmekten çekinmeyin.</p>
            </div>
            <div class="footer">
                <p>© 2024 AşkSitesi - Aşkınızı dijital dünyaya taşıyoruz</p>
                <p>Bu email otomatik olarak gönderilmiştir.</p>
            </div>
        </div>
    </body>
    </html>
    `

    const mailOptions = {
      from: `"AşkSitesi" <${process.env.GMAIL_USER}>`,
      to,
      subject: subject || "AşkSitesi - Sipariş Onayı",
      html: html || emailTemplate,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Email sending failed" },
      { status: 500 },
    )
  }
}
