const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

postSchedules = (req, res) => {
  //given a day of the week, a start date, a start time and an end time, create schedules that recur on the given day for the next 200 weeks.
  let startDate = req.body.startDate; //2020-03-02
  let startTime = req.body.startTime; //15:00:00
  let endTime = req.body.endTime; //19:00:00
  let recurringScheduleId = req.body.recurringScheduleId || 123;
  // let startDateMoment = moment(startDate, 'DD/MM/YYYY');
  startTime = moment(`${startDate} ${startTime}`, 'YYYY-MM-DDTHH:mm:ss')
  endTime = moment(`${startDate} ${endTime}`, 'YYYY-MM-DDTHH:mm:ss')
  let teacherId = req.params.teacherId;

  let sql = `
  INSERT INTO schedules (
    teacher_id, day_of_week, date_, start_time, end_time, recurring_schedule_id
  )
  VALUES
    (?, ?, ?, ?, ?, ?)
  `;

  let replacements = [teacherId, startTime.format('E'), startTime.format('YYYY-MM-DD'), startTime.format('YYYY-MM-DD HH:mm:ss'), endTime.format('YYYY-MM-DD HH:mm:ss'), recurringScheduleId]
  
  let i = 0;

  while(i < 5) {
    startTime = startTime.add(1, 'week');
    endTime = endTime.add(1, 'week');
    sql = sql.concat(', (?, ?, ?, ?, ?, ?)')
    replacements.push(teacherId, startTime.format('E'), startTime.format('YYYY-MM-DD'), startTime.format('YYYY-MM-DD HH:mm:ss'), endTime.format('YYYY-MM-DD HH:mm:ss'), recurringScheduleId);
    i = i + 1;
  }

  sql = sql.concat(';')

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=>{
    if(err) {return res.status(500).send(err)}
    return res.status(201).send('resource created')
  })
}

module.exports = postSchedules;

// const mysql = require('mysql');
// const pool = require('../../../mysql/connection');
// const moment = require('moment');

// putSchedules = (req, res) => {
//   //given a day of the week, a start date, a start time and an end time, create schedules that recur on the given day for the next 200 weeks.
//   let startDate = req.query.startDate; //2020-03-02
//   let startTime = req.query.startTime; //15:00:00
//   let endTime = req.query.endTime; //19:00:00
//   let recurringScheduleId = req.recurringScheduleId || 123;
//   // let startDateMoment = moment(startDate, 'DD/MM/YYYY');
//   startTime = moment(`${startDate} ${startTime}`, 'YYYY-MM-DDTHH:mm:ss')
//   endTime = moment(`${startDate} ${endTime}`, 'YYYY-MM-DDTHH:mm:ss')
//   let teacherId = req.params.teacherId;

//   let sql = `
//   INSERT INTO schedules (
//     teacher_id, day_of_week, date_, start_time, end_time, recurring_schedule_id
//   )
//   VALUES
//     (?, ?, ?, ?, ?, ?)
//   `;

//   let replacements = [teacherId, startTime.format('E'), startTime.format('YYYY-MM-DD'), startTime.format('YYYY-MM-DD HH:mm:ss'), endTime.format('YYYY-MM-DD HH:mm:ss'), recurringScheduleId]
  
//   let i = 0;

//   while(i < 5) {
//     startTime = startTime.add(1, 'week');
//     endTime = endTime.add(1, 'week');
//     sql = sql.concat(', (?, ?, ?, ?, ?, ?)')
//     replacements.push(teacherId, startTime.format('E'), startTime.format('YYYY-MM-DD'), startTime.format('YYYY-MM-DD HH:mm:ss'), endTime.format('YYYY-MM-DD HH:mm:ss'), recurringScheduleId);
//     i = i + 1;
//   }

//   sql = sql.concat(';')

//   sql = mysql.format(sql, replacements);
//   pool.query(sql, (err, rows)=>{
//     if(err) {return res.status(500).send(err)}
//     return res.status(201).send('resource created')
//   })
// }

// module.exports = putSchedules;


// let req = {
//   query: {
//     teacherId: 1,
//     dayOfWeek: 'Mon',
//     startDate: '2020-03-02',
//     startTime: '15:00:00',
//     endTime: '19:00:00',
//   },
//   recurringScheduleId: 123
// }


// TESTING PURPOSES... 

// let dayOfWeek = req.query.dayOfWeek; //Mon
// let startDate = req.query.startDate; //2020-03-02
// let startTime = req.query.startTime; //15:00:00
// let endTime = req.query.endTime; //19:00:00
// // let startDateMoment = moment(startDate, 'DD/MM/YYYY');
// startTime = moment(`${startDate} ${startTime}`, 'YYYY-MM-DDTHH:mm:ss');
// endTime = moment(`${startDate} ${endTime}`, 'YYYY-MM-DDTHH:mm:ss');
// let teacherId = req.query.teacherId;
// let recurringScheduleId = req.recurringScheduleId;

// // let valid = moment('03/02/2020', 'DD/MM/YYYY').isValid().format('E');

// console.log('START TIME', startTime.format('E YYYY-MM-DD HH:mm:ss'));

// console.log('END TIME', endTime.isValid());

// let sql = `
//   INSERT INTO schedules (
//     teacher_id, day_of_week, date_, start_time, end_time, recurring_schedule_id
//   )
//   VALUES
//     (?, ?, ?, ?, ?, ?)
//   `

//   let replacements = [teacherId, startTime.format('E'), startTime.format('YYYY-MM-DD'), startTime.format('E YYYY-MM-DD HH:mm:ss'), endTime.format('E YYYY-MM-DD HH:mm:ss'), recurringScheduleId]

// let i = 0;
//   while(i < 10) {
//     startTime = startTime.add(1, 'week');
//     endTime = endTime.add(1, 'week');
//     sql = sql.concat(', (?, ?, ?, ?, ?)')
//     replacements.push(teacherId, startTime.format('E'), startTime.format('YYYY-MM-DD'), startTime.format('YYYY-MM-DD HH:mm:ss'), endTime.format('YYYY-MM-DD HH:mm:ss'), recurringScheduleId);
//     i = i + 1;
//   }

//   sql = sql.concat(';')

//   console.log('SQL', sql)
//   console.log('REPLACEMENTS', replacements);