const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const postSubscription = (req, res, next) => {
  const { student_id, teacher_id, instrument_id, lesson_duration, address_id, start_time_stamp } = req.body;

  console.log('REQQQQQ BODY',req.body)
  req.body.HARDCODED = 'HARDCODED';

  let time_created = moment().format('YYYY-MM-DD HH:mm:ss');
  let day_id = moment(start_time_stamp).format('E');
  let startDate = moment(start_time_stamp).format('YYYY-MM-DD');
  let time = moment(start_time_stamp).format('HH:mm:ss');
  let price;
  switch(lesson_duration) {
    case "30":
      price = 40;
      break;
    case 45:
      price = 56;
      break;
    default:
      price = 72;
  }

  let sql = `
  INSERT INTO subscriptions (
    student_id, teacher_id, day_id, time_, start_date, instrument_id, lesson_price, lesson_duration, address_id, time_created
  )
  VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `
  let replacements = [student_id, teacher_id, day_id, time, startDate, instrument_id, price, lesson_duration, address_id, time_created];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err) {return res.status(500).send(err)}
    req.body.subscriptionId = results.insertId;
    res.status(200).json(req.body)
    // next();
  })
}

module.exports = postSubscription;