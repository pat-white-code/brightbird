const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getClientSubscriptions = (req, res) => {

  let sql = `
    SELECT subscriptions.id, days.day_of_week, time_, students.first_name AS student_first_name, students.last_name AS student_last_name, teachers.first_name AS teacher_first_name, teachers.last_name AS teacher_last_name
    FROM clients
    JOIN students
      ON students.client_id = clients.id
    JOIN subscriptions
      ON subscriptions.student_id = students.id
    JOIN days
      ON subscriptions.day_id = days.id
    JOIN teachers
      ON subscriptions.teacher_id = teachers.id
    WHERE clients.id = ?;
  `
  let replacements = [req.params.client_id];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.json(rows)
  })
}

module.exports = getClientSubscriptions;
