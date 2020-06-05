// given a request object, send an email with all the relevant information about the new subscription

const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const cors = require('cors');
const moment = require('moment');
require('dotenv').config();

const mailNewSubscription = (req, res) => {
  
  async function main() {
    
    let subscriptionId = req.body.subscriptionId
    let response = await fetch(`http://${process.env.IP}/api/subscriptions/${subscriptionId}`);
    let json = await response.json();
    let sub = json[0];
    let studentName = `${sub.student_first_name} ${sub.student_last_name}`;
    let instrumentName = sub.instrument_name;
    let address = sub.address;
    let teacherName = `${sub.teacher_first_name} ${sub.teacher_last_name}`
    let teacherEmail = sub.teacher_email;
    let teacherPhone = sub.teacher_phone;
    let parentName = `${sub.parent_first_name} ${sub.parent_last_name}`;
    let parentEmail = sub.parent_email;
    let parentPhone = sub.parent_phone;
    let lessonDuration = sub.lesson_duration;
    let price = sub.lesson_price;
    let startTime = moment(`${sub.start_date} ${sub.time_}`, 'YYYY-MM-DD HH-mm-ss');
    let endTime = startTime.clone().add(lessonDuration, 'minutes');
    let startDateText = startTime.format('LL');
    let lessonDay = sub.day_of_week;
    let startTimeText = startTime.format('h:mm A');
    let endTimeText = endTime.format('h:mm A');
    let age = Math.abs(moment(sub.dob).diff(moment(), 'years'));

    // let subjectLine = startTime.format('MON MAR 5 @ 3:00 PM')
    let subjectLine = startTime.format('dddd MMMM Do @ h:mm A');


    let output = `
  <p>You have a new subscription</p>
  <h3>Lesson Details</h3>
  <ul>
    <li><b>Student: </b>${studentName} (${age}) - ${lessonDuration}-min ${instrumentName}</li>
    <li><b>Subscription: </b>${lessonDay}s at ${startTimeText} - ${endTimeText}, starting ${startDateText}</li>
    <li><b>Price: </b>$${price} / Lesson</li>
    <li><b>Address: </b>${address}</li>
  </ul>
  <h3>Parent/Client Information</h3>
  <ul>
    <li><b>Name: </b>${parentName}</li>
    <li><b>Email: </b>${parentEmail}</li>
    <li><b>Phone: </b>${parentPhone}</li>
  </ul>
  <h3>Teacher Information</h3>
  <ul>
    <li><b>Name: </b>${teacherName}</li>
    <li><b>Email: </b>${teacherEmail}</li>
    <li><b>Phone: </b>${teacherPhone}</li>
  </ul>

  <p>We hope you have a great experience with BrightBird Muisc!</p>
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
      subject: `Lesson Confirmation - ${subjectLine} w/ ${teacherName}`, // Subject line
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

module.exports = mailNewSubscription;