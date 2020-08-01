const pool = require('../../../mysql/connection');
const mysql = require('mysql');
const moment = require('moment');

const getLessonsByTeacher = (req, res) => {
  let date = moment().format('YYYY-MM-DD');
  const { teacherId } = req.params;
  let sql = `
  SELECT 
      lessons.id,
      lessons.day_time, 
      students.first_name, 
      students.last_name, 
      instruments.instrument_name, 
      lessons.duration
    FROM lessons
      JOIN students
        ON students.id = lessons.student_id
      JOIN instruments
        ON lessons.inst_id = instruments.id
        WHERE date_ > ?
    AND teacher_id = ?
    ORDER BY day_time;
    `
    let replacements = [date, teacherId]

    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows)=>{
      if(err) {return res.status(500).send(err)}
      return res.status(200).json(rows);
    })
}

module.exports = getLessonsByTeacher;