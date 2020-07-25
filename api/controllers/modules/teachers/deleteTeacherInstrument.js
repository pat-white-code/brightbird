const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const deleteTeacherInstrument = (req, res) => {
  let sql = `DELETE FROM teacher_instruments WHERE id = ?;`

  let replacements = [req.params.teacherInstrumentId];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results)=>{
    if(err) {return res.status(500).send(err)}
    return res.status(204).send(results);
  })
}

module.exports = deleteTeacherInstrument;