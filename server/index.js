import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Validate required env
const required = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "FROM_EMAIL",
  "TO_EMAIL",
];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.warn("Missing env vars for email server:", missing.join(", "));
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing required fields" });
    }

    const subject = `Contact Inquiry - ${name}`;
    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject,
      text: `${name}\n${email}\n${phone}\n\n${message}`,
      html,
    });

    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Email server listening on port ${PORT}`);
});
