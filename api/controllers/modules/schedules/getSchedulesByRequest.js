const mysql = require('mysql');
const pool = require('../../../mysql/connection');

const getSchedulesByRequest = (req, res) => {
  const {instrumentId, zipCode, studentAge} = req.query;

  let sql = `
  SELECT 
    teachers.id AS teacher_id, 
      teachers.first_name, 
      teachers.last_name, 
      instrument_name, 
      zip_codes.zip_code, 
      schedules.date_,
      schedules.start_time AS day_start_time, 
      schedules.end_time AS day_end_time, 
      lessons.start_time AS lesson_start_time, 
      lessons.end_time AS lesson_end_time, 
      lessons.day_time AS lesson_time_stamp,
      service_requests.lesson_duration,
      addresses.address,
      (select addresses.address from service_requests JOIN addresses ON addresses.id = service_requests.address_id WHERE service_requests.id = ?) AS request_address
    FROM teachers
    JOIN teacher_instruments
      ON teachers.id = teacher_instruments.teacher_id
    JOIN zip_codes
      ON teachers.id = zip_codes.teacher_id
    JOIN instruments
      ON instruments.id = teacher_instruments.inst_id
    Join schedules
      ON schedules.teacher_id = teachers.id
    JOIN lessons
      ON lessons.schedule_id = schedules.id
    JOIN service_requests
      ON service_requests.id = ?
    JOIN students
      ON lessons.student_id = students.id
    JOIN addresses
      ON lessons.address_id = addresses.id
  -- student info here 
  -- instrumentQuery goes here... 
    WHERE teacher_instruments.inst_id = ?
  -- zip code query goes here 
      AND zip_codes.zip_code = ?
  -- student age query goes here...
      AND teacher_instruments.min_age <= ?

  ORDER BY teacher_id, lesson_time_stamp
  LIMIT 100;
  `
  let replacements = [req.params.requestId, req.params.requestId, instrumentId, zipCode, studentAge];

  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows)=> {
    if(err){return res.status(500).send('Error')}
    return res.status(200).json(rows)
  })
}

module.exports = getSchedulesByRequest;