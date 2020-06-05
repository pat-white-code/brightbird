const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getClientRequests = (req, res) => {
  let sql = `
    SELECT service_requests.id, service_requests.address_id, service_requests.experience, students.id AS student_id, students.first_name, students.last_name, instruments.id AS instrument_id, instruments.instrument_name, service_requests.lesson_duration, service_requests.student_age, service_requests.id, addresses.zip_code, students.dob, addresses.address, addresses.street
    FROM clients
    JOIN students
      ON students.client_id = clients.id
    JOIN service_requests
      ON service_requests.student_id = students.id
    JOIN instruments
      ON service_requests.instrument_id = instruments.id
  JOIN addresses
    ON addresses.id = service_requests.address_id
  WHERE clients.id = ?
    AND service_requests.is_active = 1;
  `
  let replacements = [req.params.clientId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.json(rows);
  })
}

module.exports = getClientRequests;