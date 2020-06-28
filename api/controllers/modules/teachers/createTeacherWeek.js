const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const createTeacherWeek = (req, res, next) => {
  const {dayId, startTime, endTime, teacherId} = req.body;
  let startDate;
  let date = moment();
  let days = 0
  while (days < 7) {
    console.log('DATE FORMAT E', date.format('E'));
    console.log('DAY ID', dayId);
    if(date.format('E') === dayId){
      console.log('MATCH!')
      startDate = date.format('YYYY-MM-DD')
    }
    date.add(1, 'days');
    days++;
  }

  let sql = `
  INSERT INTO teacher_week (
    day_id, start_time, end_time, start_date, teacher_id
  )
  VALUES (
    ?, ?, ?, ?, ?
  )`

  let replacements = [dayId, startTime, endTime, startDate, teacherId]

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err) {return res.status(500).send(err)}
    req.body.startDate = startDate;
    req.body.weekId = results.insertId
    console.log('REQ BODY',req.body)
    next()
  })
}

module.exports = createTeacherWeek;