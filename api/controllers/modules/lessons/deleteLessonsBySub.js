// Given a subscription ID, delete all lessons with that subscription ID after today's date.
const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');


const deleteLessonsBySub = (req, res, next) => {

  const date = moment().format('YYYY-MM-DD');
  const { subId } = req.params;

  let sql = `
    DELETE FROM lessons
    WHERE subscription_id = ?
    AND date_ > ?;
  `
  let replacements = [subId, date]
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err) {res.status(500).send(err)}
    if(req.query.edit) {
      next()
    } else {
      res.status(204).send(results);
    }
  })
}

module.exports = deleteLessonsBySub;