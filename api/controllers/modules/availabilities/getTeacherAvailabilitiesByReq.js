// given a request Id and Teacher id, return teacher availabilities for that request.
const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getTeacherAvailabilitiesByRequest = (req, res) => {
  const {requestId, teacherId} = req.params
  let sql = `
    SELECT start_time_stamp FROM teacher_availabilities
      WHERE request_id = ?
      AND teacher_id = ?;
  `
  let replacements = [requestId, teacherId]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send(err)}
    res.status(200).json(rows)
  })
}

module.exports = getTeacherAvailabilitiesByRequest;