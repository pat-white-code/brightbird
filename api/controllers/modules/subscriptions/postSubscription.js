const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const postSubscription = (req, res, next) => {

  console.log('REQQQQQ BODY',req.body)
  req.body.HARDCODED = 'HARDCODED';

  let timeCreated = moment().format('YYYY-MM-DD HH:mm:ss');

  let sql = `
  INSERT INTO subscriptions (
    student_id, teacher_id, day_id, time_, start_date, instrument_id, lesson_price, lesson_duration, address_id, time_created
  )
  VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `
  let replacements = [req.body.studentId, req.body.teacherId, req.body.dayId, req.body.time_, req.body.startDate, req.body.instrumentId, req.body.price, req.body.duration, req.body.address_id, timeCreated];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=> {
    if(err) {return res.status(500).send(err)}
    req.body.subscriptionId = results.insertId;
    next();
  })
}

module.exports = postSubscription;






// const mysql = require('mysql');
// const pool = require('../../../mysql/connection');
// const moment = require('moment');

// const postSubscription = (req, res, next) => {

//   console.log('REQQQQQ BODY',req.body)
//   req.body.HARDCODED = 'HARDCODED';

//   let timeCreated = moment().format('YYYY-MM-DD HH:mm:ss');

//   let sql = `
//   INSERT INTO subscriptions (
//     student_id, teacher_id, day_id, time_, start_date, instrument_id, lesson_price, lesson_duration, address_id, time_created
//   )
//   VALUES 
//     (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
//   `
//   let replacements = [req.body.studentId, req.body.teacherId, req.body.dayId, req.body.time_, req.body.startDate, req.body.instrumentId, req.body.price, req.body.duration, req.body.address_id, timeCreated];

//   sql = mysql.format(sql, replacements);
//   new Promise((resolve, reject)=> {
//     pool.query(sql, (err, results)=>{
//       if(err) {return res.status(500).send(err)}
//       req.body.subscriptionId = results.insertId
//       resolve(results)
//     })
//   }).then(()=>{
//     next();
//   });
// }

// module.exports = postSubscription;

// Given a student picking a lesson with a teacher, create a subscription

// let req = {
//   body: {
//     studentId: 1,
//     teacherId: 1,
//     instrumentId: 1,
//     dayId: 1,
//     startDate: '2020-03-02',
//     dayTime: '2020-03-02 17:00:00',
//     time_: '17:00:00',
//     duration: 30,
//     price: 40,
//     address_id: 1
//   }
// }

// let sql = `
//   INSERT INTO subscriptions (
//     student_id, teacher_id, day_id, time_, start_date, instrument_id, lesson_price, lesson_duration, address_id
//   )
//   VALUES 
//     (?, ?, ?, ?, ?, ?, ?, ?, ?);
// `

// let replacements = [req.body.studentId, req.body.teacherId, req.body.dayId, req.body.time_, req.body.startDate, req.body.instrumentId, req.body.price, req.body.duration, req.body.address_id];

// console.log(sql, replacements);

// INSERT INTO schedules (
// 	teacher_id, start_time, end_time
// )
// VALUES
//   (1, '2020-03-02 03:00:00', '2020-03-02 07:00:00');


// let sql2 = `
  //   SELECT id FROM subscriptions
  //   ORDER BY time_created DESC
  //   LIMIT 1;
  // `
  // // let replacements2 = [timeCreated];
  // // sql2 = mysql.format(sql2, replacements2);
  // pool.query(sql2, (err, rows)=> {
  //   if(err){return res.status(500).send(err)}
  //   return res.json(rows);
  //   // req.body.subscriptionId = rows[0].id
  // })