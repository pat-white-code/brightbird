const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const deleteLessons = (req, res, next) => {
  console.log('REQ BODY', req.body);
  let subscriptionId = req.params.subscriptionId;
  let date = req.body.originalDate || req.body.endDate;

  let sql = `
  DELETE FROM lessons
  WHERE subscription_id = ?
  AND date_ >= ?;
  `
  
  let replacements = [subscriptionId, date];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err) {return res.status(500).send(err)}
    console.log('lessons deleted');
    next()
  })
}

module.exports = deleteLessons;