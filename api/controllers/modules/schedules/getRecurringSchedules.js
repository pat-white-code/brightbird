const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getRecurringSchedules = (req, res) => {
  let sql = `
    SELECT recurring_schedules.id AS recurring_schedule_id, recurring_schedules.day_id, day_of_week, start_time, end_time, start_date 
    FROM recurring_schedules
    JOIN days
      ON day_id = days.id
    WHERE teacher_id = ?;
  `;

  let replacements = [req.params.teacherId]
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows) => {
    if(err) {
      return res.status(500).send(err);
    }
    return res.send(rows);
  })
}

module.exports = getRecurringSchedules;