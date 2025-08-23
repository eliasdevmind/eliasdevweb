import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { nome, email, mensagem } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Outlook365",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      }
    });

    await transporter.sendMail({
      from: `"Portfólio - Contato" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nova mensagem de ${nome}`,
      text: `De: ${nome} (${email})\n\n${mensagem}`,
    });

    res.status(200).json({ success: true, message: "Mensagem enviada!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}
