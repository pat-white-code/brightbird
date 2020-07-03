const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getSchedulesByRequest = (req, res) => {
  const {instrumentId, zipCode, studentAge, exp} = req.query;

  let sql = `
      SELECT schedules.*, teachers.max_drive FROM schedules
    JOIN teachers 
      ON teachers.id = schedules.teacher_id
    JOIN zip_codes
      ON zip_codes.teacher_id = teachers.id
    JOIN teacher_instruments
      ON teacher_instruments.teacher_id = teachers.id
    WHERE zip_code = ?
    AND instrument_id = ?
    AND min_age < ?
    AND max_exp > ?;
  `
  let replacements = [zipCode, instrumentId, studentAge, exp];

  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send(err)}
    return res.status(200).json(rows)
  })
}

module.exports = getSchedulesByRequest;