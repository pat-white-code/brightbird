const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const getLessonsByTeacher = (req, res) => {
  let startMonth = moment().startOf('month').format('YYYY-MM-DD HH:mm:ss');
  let endMonth = moment().endOf('month').format('YYYY-MM-DD HH:mm:ss');
  // REQ.BODY.statusID
  // REQ.BODY.lessonId
  // req.bod.lessons = [1, 2, 3]

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
        WHERE day_time > ?
    AND day_time < ?
    AND teacher_id = ?
    ORDER BY day_time;
    `
  
  let replacements = [startMonth, endMonth, req.params.teacherId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=>{
    if(err){return res.status(500).send(err)}
    return res.status(200).json(rows);
  });
}

module.exports = getLessonsByTeacher;