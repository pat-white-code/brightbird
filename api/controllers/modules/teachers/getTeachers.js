const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getTeachers = (req, res) => {
  let sql = `
  SELECT teachers.id AS teacher_id, first_name, last_name, instrument_name, zip_code
  FROM teachers
  JOIN teacher_instruments
    ON teachers.id = teacher_instruments.teacher_id
  JOIN zip_codes
    ON teachers.id = zip_codes.teacher_id
  JOIN instruments
    ON instruments.id = teacher_instruments.inst_id

-- student info here 
-- instrumentQuery goes here... 
  WHERE inst_id = ?
-- zip code query goes here 
    AND zip_code = ?
-- student age query goes here...
    AND teacher_instruments.min_age <= ?;
  `
  let replacements = [req.query.instId, req.query.zipCode, req.query.studentAge]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('ERROR' + err)
    }
    return res.json(rows);
  })
}

module.exports = getTeachers;