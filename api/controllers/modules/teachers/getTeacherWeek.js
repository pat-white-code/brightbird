const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getTeacherWeek = (req, res) => {
  let sql = `
    SELECT teacher_week.*, day_of_week FROM teacher_week
    JOIN days
      ON days.id = day_id
    WHERE teacher_id = 9;;
  `;
  
  sql = mysql.format(sql, [req.params.teacherId])

  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.json(rows)
  })
}

module.exports = getTeacherWeek