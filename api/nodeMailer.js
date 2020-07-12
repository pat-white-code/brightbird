const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP,
  port: 587,
  auth: {
      user: process.env.EMAIL_PASSWORD,
      pass: process.env.EMAIL_USERNAME
  },
  tls: {
    rejectUnauthorized: false
  }
});