const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getRequestInfo = (req, res) => {
  let sql = `
    SELECT 
    students.first_name AS student_first_name, 
      students.last_name AS student_last_name, 
      students.dob, 
      
      clients.first_name AS parent_first_name, 
      clients.last_name AS parent_last_name, 
      
      addresses.address,
      service_requests.lesson_duration, 
      
      instruments.instrument_name
    FROM service_requests
    JOIN students
      ON service_requests.student_id = students.id
    JOIN clients
      ON clients.id = students.client_id
    JOIN instruments
      ON service_requests.instrument_id = instruments.id
    JOIN addresses
      ON students.address_id = addresses.id
    WHERE service_requests.id = ?;
  `
  let replacements = [req.params.requestId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.json(rows);
  })
}

module.exports = getRequestInfo;