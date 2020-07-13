// Given a userId, delete all teacher availabilitilities
const mysql = require('mysql');
const pool = require("../../../mysql/connection");

const deleteClientAvailabilities = (req, res, next) => {
  const { clientId } = req.params;
  let sql = `
    DELETE teacher_availabilities
    FROM teacher_availabilities
    INNER JOIN service_requests ON request_id = service_requests.id
    INNER JOIN students ON service_requests.student_id = students.id
    INNER JOIN clients ON students.client_id = clients.id
    WHERE client_id = ?;
  `

  let replacements = clientId;

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results)=> {
    if(err) {res.status(500).send(err)}
    // res.status(204).send(results);
    next();
  })
}

module.exports = deleteClientAvailabilities;