// given a client id,
// receive first_name,
// last_name,
// DOB 
// of student in body

const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const postStudent = (req, res) => {
  let sql = `
    INSERT INTO students (
      client_id, first_name, last_name, dob, active
    )
    VALUES
      (?, ?, ?, ?, 1);
  `
  let replacements = [req.body.clientId, req.body.firstName, req.body.lastName, req.body.dob]
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err){return res.status(500).send(err)}
    return res.status(201).json({message:'student created', id:results.insertId})
  })
}

module.exports = postStudent;