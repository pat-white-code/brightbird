// given a request Id and Teacher id, return teacher availabilities for that request.
const pool = require('../../../mysql/connection');
const mysql = require('mysql');
const moment = require('moment');

const getTeacherAvailabilitiesByRequest = (req, res) => {
  const {requestId, teacherId} = req.params
  const twoWeeksAway = moment().add(2, 'weeks').format('YYYY-MM-DD HH:mm:ss')
  const tomorrow = moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss')
  console.log('TOMORROW', tomorrow);
  console.log('2 weeks', twoWeeksAway);
  let sql = `
    SELECT teacher_availabilities.*,
    teacher_id, student_id, instrument_id, lesson_duration, address_id
    FROM teacher_availabilities
    JOIN service_requests
      ON request_id = service_requests.id
    WHERE request_id = ?
    AND teacher_id = ?
    AND start_time_stamp < ?
    AND start_time_stamp > ?
    ORDER BY start_time_stamp;
  ;
  `
  let replacements = [requestId, teacherId, twoWeeksAway, tomorrow]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send(err)}
    res.status(200).json(rows)
  })
}

module.exports = getTeacherAvailabilitiesByRequest;