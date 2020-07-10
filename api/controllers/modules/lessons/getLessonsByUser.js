// given a user id and date, return on or after that date future lessons
const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getLessonsByUser = (req, res) => {
  const { userId } = req.params
  const { date } = req.query;

  let sql = `
    SELECT 
    lessons.id,
      lessons.day_time,
      lessons.duration,
      lessons.student_id,
      lessons.teacher_id,
      lessons.subscription_id,
      lessons.price,
    students.first_name as student_first_name,
      students.last_name as student_last_name,
      teachers.first_name as teacher_first_name,
      teachers.last_name as teacher_last_name,
      instrument_name as instrument
  FROM lessons
  JOIN students
    ON students.id = student_id
  JOIN teachers
  ON teacher_id = teachers.id
  JOIN instruments
    ON inst_id = instruments.id
  WHERE client_id = ?
  AND lessons.date_ >= ?;
  `

  const replacements = [userId, date];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=>{
    if(err) { return res.status(500).send(err) }
    return res.status(200).json(rows);
  })
}

module.exports = getLessonsByUser;