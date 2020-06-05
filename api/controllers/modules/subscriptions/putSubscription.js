const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const putSubscription = (req, res, next) => {
  let dayId = moment(req.body.date, 'YYYY-MM-DD').format('E');


  let sql = `
    UPDATE subscriptions
    SET day_id = ?,
      time_ = ?,
      start_date = ?,
      lesson_price = ?,
      lesson_duration = ?
    WHERE id = ?;
  `
  let replacements = [
    dayId,
    req.body.startTime,
    req.body.date,
    req.body.price,
    req.body.duration,
    req.params.subscriptionId
  ];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    // return res.status(200).send(`subscription ${req.params.subscriptionId} updated`)
    console.log(`subscription ${req.params.subscriptionId} updated`)
    req.body.dayId = dayId;
    next()
  })
}

module.exports = putSubscription;