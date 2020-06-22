const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getTeacherInfo = (req, res) => {
  let sql = `
    SELECT first_name, last_name, email, phone, bio, img_url, max_drive FROM teachers
    WHERE id = ?;`
  
  sql = mysql.format(sql, [req.params.teacherId])

  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.status(200).send(rows);
  })
}

module.exports = getTeacherInfo;