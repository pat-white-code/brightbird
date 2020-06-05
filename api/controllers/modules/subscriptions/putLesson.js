const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');


const putLesson = (req, res, next) => {

  // FORM:
  let date = req.body.date;
  let startTime = req.body.startTime;
  let duration = req.body.duration;
  
  //DERIVED:
  let dayTime = moment(date+startTime, 'YYYY-MM-DD HH:mm:ss');
  let endTime = dayTime.clone().add(duration, 'minutes').format('HH:mm:ss');
  let id = req.params.lessonId;
  let price;
  if(duration == 30) {price = 40} else if(duration == 45) {price = 56} else if(duration == 60) {price = 72};

  // DATE
  // TIME
  // DURATION
  let sql = `
  UPDATE lessons
  SET day_time = ?,
    duration = ?,
    price = ?,
      date_ = ?,
      start_time = ?,
      end_time = ?
  WHERE id = ?;`;

  let replacements = [dayTime.format('YYYY-MM-DD HH:mm:ss'), duration, price, date, startTime, endTime, id];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err){return res.status(500).send(err)}
    req.body.subscriptionId = req.params.subscriptionId;
    req.body.price = price;
    req.body.dayTime = dayTime.format('YYYY-MM-DD HH:mm:ss');
    console.log(`lesson ID ${req.params.lessonId} has been updated.`);
    next()
  })
}

module.exports = putLesson;