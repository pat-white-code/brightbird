const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const addTeacherInstrument = (req, res) => {
  const {instrumentId, minAge, maxExp} = req.body;
  const {teacherId} = req.params;
  let sql = `
    INSERT into teacher_instruments (
      teacher_id, instrument_id, min_age, max_exp
    )
    VALUES (
      ?, ?, ?, ?
    );
  `;
  let replacements = [teacherId, instrumentId, minAge, maxExp]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result)=> {
    if(err) {
      return res.status(500).send('ERROR' + err)
    }
    return res.json(result); 
  })
}

module.exports = addTeacherInstrument;