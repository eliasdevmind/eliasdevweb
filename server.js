import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Página de contato
app.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contato.html"));
});

// Rota para envio do formulário
app.post("/enviar", async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
    // Transporter padrão: porta 587
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // ignora certificado autoassinado (teste)
      }
    });

    // Verifica conexão
    await transporter.verify();

    // Envia para você
    await transporter.sendMail({
      from: `"Portfólio - Contato" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nova mensagem de ${nome}`,
      text: `De: ${nome} (${email})\n\n${mensagem}`,
      html: `<h3>Nova mensagem do portfólio</h3>
             <p><b>Nome:</b> ${nome}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Mensagem:</b><br>${mensagem}</p>`
    });

    // Cópia opcional para o visitante
    await transporter.sendMail({
      from: `"Portfólio - Contato" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Recebemos sua mensagem!",
      text: `Olá ${nome}, recebemos sua mensagem e entraremos em contato em breve.\n\nObrigado!`,
      html: `<p>Olá <b>${nome}</b>, recebemos sua mensagem e entraremos em contato em breve.<br>Obrigado!</p>`
    });

    res.json({ success: true, message: "Mensagem enviada com sucesso! ✅" });

  } catch (error) {
    console.error("Erro no transporte 587:", error);

    // Fallback: porta 465 SSL direto
    try {
      let fallbackTransporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 465,
        secure: true, // SSL direto
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      await fallbackTransporter.sendMail({
        from: `"Portfólio - Contato" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `Nova mensagem de ${nome}`,
        text: `De: ${nome} (${email})\n\n${mensagem}`,
        html: `<h3>Nova mensagem do portfólio</h3>
               <p><b>Nome:</b> ${nome}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Mensagem:</b><br>${mensagem}</p>`
      });

      await fallbackTransporter.sendMail({
        from: `"Portfólio - Contato" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Recebemos sua mensagem!",
        text: `Olá ${nome}, recebemos sua mensagem e entraremos em contato em breve.\n\nObrigado!`,
        html: `<p>Olá <b>${nome}</b>, recebemos sua mensagem e entraremos em contato em breve.<br>Obrigado!</p>`
      });

      res.json({ success: true, message: "Mensagem enviada com sucesso! ✅ (fallback)" });

    } catch (fallbackError) {
      console.error("Erro no fallback 465:", fallbackError);
      res.json({ success: false, message: "Erro ao enviar mensagem ❌" });
    }
  }
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em 👉 http://localhost:${PORT}`);
});
