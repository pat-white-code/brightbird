const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getTeachersForTwo = (req, res) => {
  let sql = `
    SELECT first_instrument.first_name, first_instrument.last_name, first_instrument.instrument_name, first_instrument.min_age, instruments.instrument_name, teacher_instruments.min_age 
    FROM (
      SELECT teachers.id, first_name, last_name, instrument_name, teacher_instruments.min_age
      FROM teachers
      JOIN teacher_instruments
        ON teachers.id = teacher_instruments.teacher_id
      JOIN zip_codes
        ON teachers.id = zip_codes.teacher_id
      JOIN instruments
        ON instruments.id = teacher_instruments.inst_id
      WHERE instruments.id = ?
        AND zip_code = ?
        AND teacher_instruments.min_age <= ?
    ) AS first_instrument
    JOIN teacher_instruments
      ON first_instrument.id = teacher_id
    JOIN instruments
      ON instruments.id = teacher_instruments.inst_id
    WHERE teacher_instruments.inst_id = ?
    AND teacher_instruments.min_age <= ?;
  `;

  let replacements = [req.query.instId, req.query.zipCode, req.query.studentAge, req.query.instId2, req.query.studentAge2];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send(err)}
    return res.json(rows);
  })
}

module.exports = getTeachersForTwo;