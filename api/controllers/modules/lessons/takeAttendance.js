const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const takeAttendance = (req, res) => {
  // REQ.BODY.statusID
  // REQ.BODY.lessonId

  let sql = `
    UPDATE lessons
    SET status_id = ?
    WHERE id = ?;
  `
  let replacements = [req.body.statusId, req.params.lessonId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=>{
    if(err){return res.staut(500).send(err)}
    return res.send(`attendance for lesson id ${req.query.lessonId} has been taken.`)
  });
}

module.exports = takeAttendance;

