const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const postRecurringSchedule = (req, res, next) => {
  let teacherId = req.params.teacherId;

  let dayId = req.body.dayId;
  let startTime = req.body.startTime;
  let endTime = req.body.endTime;
  let startDate = req.body.startDate;

  let sql = `
    INSERT INTO recurring_schedules (
      teacher_id, day_id, start_time, end_time, start_date
    )
    VALUES
      (?, ?, ?, ?, ?)
  `;

  let replacements = [teacherId, dayId, startTime, endTime, startDate];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results) => {
    if(err) {
      return res.status(500).send(err)
    }
    req.body.recurringScheduleId = results.insertId;
    next();
  })
}

module.exports = postRecurringSchedule;