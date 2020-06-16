const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const editMaxDrive = (req, res) => {

  const {maxDrive, teacherId} = req.body;

  let sql = `
    UPDATE teachers
    SET max_drive = ?
    WHERE id = ?;
  `

  let replacements = [maxDrive, teacherId]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if(err) {return res.status(500).send(err)}
    res.status(200).send(results)
  })
}

module.exports = editMaxDrive;