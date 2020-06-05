const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getTeacherSchedule = (req, res) => {
  let sql = `
    SELECT schedules.id, date_, start_time, end_time
    FROM schedules
    JOIN teachers
      ON schedules.teacher_id = teachers.id
    WHERE teachers.id = ?;
  `;

  let replacements = [req.params.teacher_id]

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows) => {
    if(err) {
      return res.status(500).send(err)
    }
    return res.json(rows);
  })
}

module.exports = getTeacherSchedule;