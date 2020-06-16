const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const deleteZipCode = (req, res) => {

  let sql = `
    DELETE from zip_codes
    WHERE id = ?
  `
  sql = mysql.format(sql, [req.params.zipCodeId])

  pool.query(sql, (err, results) => {
    if(err) {return res.status(500).send(err)}
    res.status(204).send(results)
  })
}

module.exports = deleteZipCode