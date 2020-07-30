const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const putSubscription = (req, res, next) => {

  const { dayId, time, lessonDuration } = req.body;
  const { subId } = req.params;

  let price;
  switch(lessonDuration) {
    case '30':
      price = 40;
      break;
    case 45:
      price = 56;
      break;
    default:
      price = 72;
  }

  req.body.price = price;

  let sql = `
    UPDATE subscriptions
    SET day_id = ?,
      time_ = ?,
      lesson_price = ?,
      lesson_duration = ?
    WHERE id = ?;
  `
  let replacements = [dayId, time, price, lessonDuration, subId]


  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    // return res.status(200).send(`subscription ${req.params.subscriptionId} updated`)
    // console.log(`subscription ${req.params.subscriptionId} updated`)
    next();
  })
}

module.exports = putSubscription;