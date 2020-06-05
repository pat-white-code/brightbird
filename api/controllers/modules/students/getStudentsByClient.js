const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getStudentsByClient = (req, res) => {
  let sql = `
    SELECT 
      students.id,
      students.first_name, 
        students.last_name,
        students.dob
    FROM students
    JOIN clients
      ON clients.id = students.client_id
    WHERE clients.id = ?;
  `
  let replacements = [req.params.clientId]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send(err)}
    return res.status(200).json(rows)
  })
}

module.exports = getStudentsByClient;