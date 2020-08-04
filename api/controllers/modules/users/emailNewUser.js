const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const cors = require('cors');
const moment = require('moment');
require('dotenv').config();

const emailNewUser = (req, res) => {
  const { email, firstName, lastName } = req.body;
  async function main() {

    let output = `
      <h1>Welcome to Brightbird Music!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, repudiandae alias tempore cupiditate magnam commodi necessitatibus expedita recusandae, dolorum error voluptates, maxime veritatis repellendus dignissimos? Tenetur dolores ducimus placeat harum?</p>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP,
      port: 587,
      auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "BrightBird Music <no-reply@brightbirdmusic.com>", // sender address
      to: email, // list of receivers
      subject: `Welcome to Brightbird, ${firstName}!`, // Subject line
      text: "Subscription info", // plain text body
      html: output // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  }
  
  main().then(()=>{
    return res.status(200).json({message: 'Email Sent.', id: req.body.userId})
  }).catch(console.error);
}

module.exports = emailNewUser;