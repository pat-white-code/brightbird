const pool = require('../../../mysql/connection');
// const mysql = require('mysql');


const getAllTeachers = (req, res) => {
    let sql = `
      SELECT *
      FROM teachers
      JOIN teacher_instruments
        ON teachers.id = teacher_instruments.teacher_id;
    `;

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('ERROR' + err)
    }
    return res.json(rows); 
  })
}

module.exports = getAllTeachers;