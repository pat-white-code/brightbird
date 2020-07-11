const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 587,
  auth: {
      user: 'info@westlakelessons.com',
      pass: 'JoeBiden354'
  },
  tls: {
    rejectUnauthorized: false
  }
});