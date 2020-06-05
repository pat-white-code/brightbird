const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getDriveTime = (req, res) => {
  let sql = `
  SELECT drive_time_seconds 
  FROM drive_times
  WHERE address_1 = ?
  AND address_2 = ?
  LIMIT 1;
  `
  let replacements = [req.query.origin, req.query.destination];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows) => {
    if (err){return res.status(500).send(err)}
    return res.json(rows);
  })
}

module.exports = getDriveTime