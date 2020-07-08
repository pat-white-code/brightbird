const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const createTeacherAvailabilities2 = (req, res) => {
  let availabilities = req.body.availabilities;
  if(!availabilities[0]) {
    res.status(200).send('No teachers Available');
  }
  const {requestId, teacherId, startTime} = availabilities[0];
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
  for( let i = 1; i < availabilities.length ; i ++) {
    let avail = availabilities[i];
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

module.exports = createTeacherAvailabilities2;