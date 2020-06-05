const mysql = require('mysql');
const pool = require('../../../mysql/connection');


const getLastLesson = (req, res) => {
  // REQ.BODY.statusID
  // REQ.BODY.lessonId
  // req.bod.lessons = [1, 2, 3]

  let sql = `
      SELECT lessons.day_time, students.first_name AS student_first_name, 
      students.last_name AS student_last_name, 
        instruments.instrument_name, 
          addresses.address, 
          teachers.first_name AS teacher_first_name, 
          teachers.last_name AS teacher_last_name, 
          teachers.email AS teacher_email, 
          teachers.phone AS teacher_phone,
          clients.first_name AS parent_first_name, 
          clients.last_name AS parent_last_name,
          clients.email AS parent_email,
          clients.phone AS parent_phone,
          subscriptions.lesson_duration,
          subscriptions.lesson_price,
          subscriptions.start_date,
          subscriptions.time_,
          students.dob,
          day_of_week
      FROM subscriptions
      JOIN students
        ON students.id = student_id
      JOIN instruments
        ON subscriptions.instrument_id = instruments.id
      JOIN addresses
        ON subscriptions.address_id = addresses.id
      JOIN clients
        ON students.client_id = clients.id
      JOIN teachers
        ON subscriptions.teacher_id = teachers.id
    JOIN lessons
      ON lessons.subscription_id = subscriptions.id
    JOIN days
      ON subscriptions.day_id = days.id
      AND subscriptions.id = ?
      ORDER BY day_time DESC
      LIMIT 1;
    `
  
  let replacements = [req.params.subscriptionId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=>{
    if(err){return res.status(500).send(err)}
    return res.status(200).json(rows);
  });
}

module.exports = getLastLesson;