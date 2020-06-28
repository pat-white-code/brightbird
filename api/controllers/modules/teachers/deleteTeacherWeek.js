const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const deleteTeacherWeek = (req, res, next) => {
  let weekId = req.params.weekId;
  let sql = `
    DELETE FROM teacher_week
    WHERE id = ?;`;

  let replacements = [weekId];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err) {return results.status(500).send(err)}
    return res.status(204).send(results);
  })
}

module.exports = deleteTeacherWeek;