// THIS Will return schedules on a teacher's calendar, given a teacher id. this function is expecting a reqbody with availableTeachers as an array

const axios = require('axios');
require('dotenv').config();

const getSchedulesByTeacher = (req, res, next) => {
  const availableTeachers = req.body.availableTeachers;
  const updateTeachers = async () => {
    let updatedTeachers = await Promise.all(availableTeachers.map(async teacher => {
      let response = await axios.get(`http://${process.env.IP}/api/schedules/${teacher.teacher_id}`);
      teacher.schedules = response.data
      console.log(teacher.schedules);
      return teacher
    }))
    return updatedTeachers;
  }

  updateTeachers()
    .then(response => {
      req.body.availableTeachers = response;
      console.log('REQ BODY GET SCHEDULES', req.body)
      res.status(200).send('teachers updated')
    })
}


module.exports = getSchedulesByTeacher;