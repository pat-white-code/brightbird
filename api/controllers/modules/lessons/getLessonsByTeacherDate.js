// Given a teacherId and Date, return lessons by that teacher on that date.

const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getLessonsByTeacherDate = (req, res) => {
  let {teacherId, date} = req.query;
  let sql = `
    SELECT * from lessons
    WHERE teacher_id = ?
    AND date_ = ?;
  `

  let replacements = [teacherId, date];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.status(200).json(rows)
  })
}

module.exports = getLessonsByTeacherDate