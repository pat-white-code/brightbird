const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const getUnloggedLessons = (req, res) => {
  // REQ.BODY.statusID
  // REQ.BODY.lessonId
  // req.bod.lessons = [1, 2, 3]
  let today = moment().format('YYYY-MM-DD')

  console.log(today);

  let sql = `
  SELECT lessons.id AS lesson_id, students.first_name, students.last_name, day_time 
    FROM lessons
    JOIN students
      ON lessons.student_id = students.id
    WHERE date_ < ?
    AND status_id = 1
    AND teacher_id = ?;
    `
  
  let replacements = [today, req.params.teacherId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=>{
    if(err){return res.status(500).send(err)}
    return res.status(200).json(rows);
  });
}

module.exports = getUnloggedLessons;