// const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getStudents = (req, res) => {

  let sql = `
    SELECT students.id, students.first_name, students.dob, students.last_name, clients.first_name AS parent_first_name, clients.last_name AS parent_last_name
    FROM students
    JOIN clients
      on students.client_id = clients.id;
  `;
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.json(rows)
  })
}

module.exports = getStudents;



