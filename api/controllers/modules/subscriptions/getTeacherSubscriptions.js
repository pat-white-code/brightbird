const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getTeacherSubscriptions = (req, res) => {

  let sql = `
    SELECT subscriptions.id, day_id, day_of_week, time_, students.first_name, students.last_name, subscriptions.lesson_duration, instruments.instrument_name, addresses.street 
    FROM subscriptions
    JOIN students
      ON subscriptions.student_id = students.id
    JOIN instruments
      ON subscriptions.instrument_id = instruments.id
    JOIN days
      ON subscriptions.day_id = days.id
    JOIN addresses
      on subscriptions.address_id = addresses.id
    WHERE teacher_id = ?;
  `
  let replacements = [req.params.teacherId];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.json(rows)
  })
}

module.exports = getTeacherSubscriptions;