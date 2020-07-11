const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const cors = require('cors');
const moment = require('moment');
require('dotenv').config();

const mailTest = (req, res) => {
  
  async function main() {

    let output = `
      <p>Hello World!</p>
      <h3>Lesson Details</h3>
    `;

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
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
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "BrightBird Music <info@westlakelessons.com>", // sender address
      to: "pat.k.white@gmail.com", // list of receivers
      subject: `Lesson Confirmation`, // Subject line
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
    res.status(200).send("Message sent")
  }).catch(console.error);
}

module.exports = mailTest;