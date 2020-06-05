// given a client Id, return all teacher availabilities for all requests


const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getAvailabilitiesByClient = (req, res) => {
  let sql = `
    SELECT 
      service_requests.id AS request_id,
        teacher_availabilities.id AS teacher_availability_id,
        teachers.id AS teacher_id,
      teachers.first_name as teacher_first_name,
      teachers.last_name AS teacher_last_name,
        teacher_availabilities.start_time_stamp,
      students.first_name AS student_first_name,
      students.last_name AS student_last_name,
      service_requests.student_age AS student_age,
      clients.id AS client_id,
      instrument_name AS instrument_name,
      service_requests.lesson_duration AS lesson_duration
    FROM teacher_availabilities
    JOIN service_requests
      ON service_requests.id = teacher_availabilities.request_id
    JOIN students ON service_requests.student_id = students.id
    JOIN clients ON students.client_id = clients.id
    JOIN teachers on teacher_availabilities.teacher_id = teachers.id
    JOIN instruments on service_requests.instrument_id = instruments.id
    WHERE client_id = ?;`

    let replacements = req.params.clientId;
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows)=> {
        if(err) {return res.status(500).send(err)}
        return res.json(rows)
    })
}

module.exports = getAvailabilitiesByClient;