const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getZipCodesByTeacher = (req, res) => {
  let teacherId = req.params.teacherId

  let sql = `
    SELECT id, zip_code FROM zip_codes
    WHERE teacher_id = ?;
  `
  sql = mysql.format(sql, [teacherId]);

  pool.query(sql, (err, rows)=>{
    if(err) {return res.status(500).send(err)}
    return res.json(rows);
  })
}

module.exports = getZipCodesByTeacher;