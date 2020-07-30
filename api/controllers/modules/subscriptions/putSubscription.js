const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const putSubscription = (req, res, next) => {
  console.log('REQ BODDDY, ', req.body);
  const { dayId, time, lesson_duration } = req.body;
  const { subId } = req.params;

  // To find date_time_stamp, find the next day that matches the day id
  let date = moment();
  let days = 0;
  
  while (days < 7) {
    console.log('DATE FORMAT E', date.format('E'));
    console.log('DAY ID', dayId);
    // dayId is integer in form, not string
    if(date.format('E') == dayId){
      console.log('MATCH!')
      req.body.start_time_stamp = moment(`${date.format('YYYY-MM-DD')} ${time}`, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm');
      console.log('START_TIME_STAMP', req.body.start_time_stamp);
    }
    date.add(1, 'days');
    days++;
  }

  let price;
  switch(lesson_duration) {
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
  let replacements = [dayId, time, price, lesson_duration, subId]


  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=> {
    if(err) {return res.status(500).send(err)}
    // return res.status(200).send(`subscription ${req.params.subscriptionId} updated`)
    // console.log(`subscription ${req.params.subscriptionId} updated`)
    next();
  })
}

module.exports = putSubscription;