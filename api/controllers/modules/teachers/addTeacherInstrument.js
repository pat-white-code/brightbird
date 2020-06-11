const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const addTeacherInstrument = (req, res) => {
  let sql = `
    SELECT instrument_id, instrument_name, min_age, max_exp
    FROM teacher_instruments
    JOIN instruments
      ON instruments.id = instrument_id
    WHERE teacher_id = ?;
  `;
  let replacements = [req.params.teacherId]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('ERROR' + err)
    }
    return res.json(rows); 
  })
}

module.exports = getTeacherInstruments;