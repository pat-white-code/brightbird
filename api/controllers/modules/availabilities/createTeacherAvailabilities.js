const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const createTeacherAvailabilities = (req, res) => {
  let teacherAvailabilities = req.body.teacherAvailabilities;
  if(!teacherAvailabilities[0]) {
    res.status(200).send('No teachers Available');
  }
  const {requestId, teacherId, startTime} = req.body.teacherAvailabilities[0];
  let sql = `
  INSERT INTO teacher_availabilities (
    request_id, teacher_id, start_time_stamp
  )
  
  VALUES (
    ?, ?, ?
  )
  `
  let replacements = [requestId, teacherId, startTime];

  // for each additional teacherAvailability, add to the sql script and the replacements array
  for( let i = 1; i < teacherAvailabilities.length ; i ++) {
    let avail = teacherAvailabilities[i];
    sql += ', ( ?, ?, ?)'
    replacements.push(avail.requestId, avail.teacherId, avail.startTime)
  }

  sql += ';'

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if(err){return res.status(500).send(err)}
    res.status(201).send(results)
  })
}

module.exports = createTeacherAvailabilities;