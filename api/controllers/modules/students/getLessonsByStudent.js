const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getLessonsByStudent = (req, res) => {

  let sql = `
    SELECT date_, duration, instruments.instrument_name, start_time, end_time, teachers.first_name, teachers.last_name 
    FROM students
    JOIN lessons
      ON lessons.student_id = students.id
    JOIN teachers
      on lessons.teacher_id = teachers.id
    JOIN instruments
      on lessons.inst_id = instruments.id
    WHERE students.id = ?;
  `;
  let replacements = [req.params.student_id];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.json(rows)
  })
}

module.exports = getLessonsByStudent;