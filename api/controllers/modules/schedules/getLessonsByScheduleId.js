const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getLessonsByScheduleId = (req, res) => {
  let sql = `
    SELECT lessons.id, day_time, duration, lessons.start_time, lessons.end_time, addresses.address
    FROM lessons
    JOIN schedules
      ON lessons.schedule_id = schedules.id
    JOIN students
      ON lessons.student_id = students.id
  JOIN addresses
    ON students.address_id = addresses.id
    WHERE schedules.id = ?;
  `;

  let replacements = [req.params.schedule_id]
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows) => {
    if(err) {
      return res.status(500).send(err);
    }
    return res.send(rows);
  })
}

module.exports = getLessonsByScheduleId;