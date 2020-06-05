const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const deleteAvailsByRequest = (req, res, next) => {
  let sql = `
    DELETE FROM teacher_availabilities
    WHERE request_id = ?;
  `
  let replacements = req.body.requestId;
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=>{
    if(err) {return res.status(500).send(err)}
    console.log(results);
    next()
  })
}

module.exports = deleteAvailsByRequest;