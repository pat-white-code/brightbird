// Given a teacherId and Date, return lessons by that teacher on that date.

const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getLessonsByTeacherDate = (req, res) => {
  let {teacherId, date, requestId} = req.query;
  let sql = `
    SELECT *,
    (select addresses.address from service_requests JOIN addresses ON addresses.id = service_requests.address_id WHERE service_requests.id = ?) AS request_address
    from lessons
    JOIN addresses
      ON addresses.id = lessons.address_id
    WHERE teacher_id = ?
    AND date_ = ?
    ORDER BY day_time;
  `

  let replacements = [requestId, teacherId, date];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    return res.status(200).json(rows)
  })
}

module.exports = getLessonsByTeacherDate