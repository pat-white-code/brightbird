const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
// const cors = require('cors');
const moment = require('moment');
require('dotenv').config()


const mailRequest = (req, res) => {
  
  async function main() {
    let requestId = req.body.requestId;
    let response = await fetch(`http://${process.env.IP}:4001/api/requests/${requestId}`);
    let json = await response.json();
    let service = json[0];

    let studentFirstName = service.student_first_name;
    let studentLastName = service.student_last_name;
    let studentDob = service.dob
    let studentAge = Math.abs(moment(studentDob, 'YYYY-MM-DD').diff(moment(), 'years'))

    let parentFirstName = service.parent_first_name;
    let parentLastName = service.parent_last_name;
    let address = service.address;
    let lessonDuration = service.lesson_duration;
    let instrumentName = service.instrument_name;
    
    let output = `
  <p>You have a new lesson request!</p>
  <h3>Lesson Details</h3>
  <p>${studentFirstName} ${studentLastName}, ${studentAge}-years old, is looking for ${lessonDuration}-minute ${instrumentName} lessons</p>
  
  <h3>Parent/Client Information</h3>
  <ul>
    <li><b>Name: </b>${parentFirstName} ${parentLastName}</li>
    <li><b>Address: </b>$${address}</li>
    <li><b>Phone: </b>$PARENTPHONE</li>
  </ul>
  `;

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'emmy25@ethereal.email',
          pass: 'uJ1SuU6XhgPznKkZ7r'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "Emmy Corkery <emmy25@ethereal.email>", // sender address
      to: "bar@example.com, baz@example.com, info@westlakelessons.com", // list of receivers
      subject: "New Subscription Received", // Subject line
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

module.exports = mailRequest;