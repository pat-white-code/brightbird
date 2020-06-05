//  THIS FUNCTION TAKES A REQUEST ID AND RETURNS DISTINCT TEACHER WHO HAVE AVAILABILITIES RELATED TO THAT REQUEST

const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getTeachersByRequest = (req, res) => {
  let sql = `
    SELECT DISTINCT
      teacher_id,
        first_name,
        last_name,
        img_url,
        bio
    FROM teacher_availabilities
    JOIN teachers
      ON teachers.id = teacher_availabilities.teacher_id
    WHERE request_id = ?;`;
  
  let replacements = [req.params.requestId]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send(err)}
    return res.status(200).json(rows);
  })
}

module.exports = getTeachersByRequest;