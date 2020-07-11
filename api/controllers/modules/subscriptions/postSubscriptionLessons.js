const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const postSubscriptionLessons = (req, res, next) => {
  const { start_time_stamp, lesson_duration, student_id, teacher_id, instrument_id, subscriptionId, price, address_id } = req.body;
  let date = moment(start_time_stamp).format('YYYY-MM-DD');
  let weeklyLesson = moment(start_time_stamp);
  console.log('LESSONS REQUEST OBJECT', req.body);
  // let dayTime = moment(req.body.start_, 'YYYY-MM-DD HH:mm:ss');
  // let endTime = dayTime.clone().add(req.body.duration, 'minutes').format('HH:mm:ss');

  let sql = `
  INSERT INTO lessons (
    day_time, duration, student_id, teacher_id, inst_id, subscription_id, price, tandem, date_, address_id, status_id
    )
  VALUES 

  ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ) `;

  let replacements = [weeklyLesson.format('YYYY-MM-DD HH:mm:ss'), lesson_duration, student_id, teacher_id, instrument_id, subscriptionId, price, 0, date, address_id, 1];

  let i = 0;
  while (i < 5) {
    weeklyLesson.add(1, 'week');
    date = weeklyLesson.format('YYYY-MM-DD');
    sql = sql.concat(', (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    replacements.push(weeklyLesson.format('YYYY-MM-DD HH:mm:ss'), lesson_duration, student_id, teacher_id, instrument_id, subscriptionId, price, 0, date, address_id, 1);
    i = i + 1;
  } 

  sql = sql.concat(';')
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send(err)}
    console.log(`lessons for subscription ID: ${req.body.subscriptionId} created`)
    next()
    // res.status(201).send(`lessons for subscription ID: ${subscriptionId} created`)
  })
}

module.exports = postSubscriptionLessons;