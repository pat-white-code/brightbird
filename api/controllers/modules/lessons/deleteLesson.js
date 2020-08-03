const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const deleteLesson = (req, res) => {
  let sql = `DELETE FROM lessons
  WHERE id = ?`
  let replacements = [req.params.lessonId];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=>{
    if(err) { return res.status(500).send(err)}
    return res.status(204).send(results);
  })
}

module.exports = deleteLesson;