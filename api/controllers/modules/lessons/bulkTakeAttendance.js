const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const bulkTakeAttendance = (req, res) => {
  // REQ.BODY.statusID
  // REQ.BODY.lessonId
  // req.bod.lessons = [1, 2, 3]


  let sql = `
    UPDATE lessons
    SET status_id = ?
    WHERE id = ?
  `
  let replacements = [req.body.statusId, req.body.lessonIds.shift()];
  
  req.body.lessonIds.forEach(id => {
    sql = sql.concat(` OR id = ? `)
    replacements.push(id);
  })

  sql = sql.concat(';')

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=>{
    if(err){return res.status(500).send(err)}
    return res.send(`attendance for lessons have been taken.`)
  });
}

module.exports = bulkTakeAttendance;