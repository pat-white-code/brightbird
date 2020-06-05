const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const editRequest = (req, res, next) => {
  const {instrumentId, lessonDuration, studentAge, addressId, experience, requestId} = req.body;

  let sql = `
    UPDATE service_requests
    SET instrument_id = ?,
      lesson_duration = ?,
        student_age = ?,
        address_id = ?,
        experience = ?
    WHERE id = ?;`;

  let replacements = [instrumentId, lessonDuration, studentAge, addressId, experience, requestId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=>{
    if(err){ return res.status(500).send(err)}
    console.log(results);
    next()
  })
}

module.exports = editRequest;