const axios = require('axios');
require('dotenv').config();

const fetchDriveTimes = (req, res, next) => {
  const lessonData = req.body.lessonData;
  const updateLessons = async () => {
    let updatedLessons = await Promise.all(lessonData.map(async lesson => {
      let origin = lesson.address.replace(/\d+ /, "");
      origin = origin.replace(/ /g, "+");
      let destination = lesson.request_address.replace(/\d+ /, "");
      destination = destination.replace(/ /g, "+");
      let response = await axios.get(`http://${process.env.IP}/api/driveTimes?origin=${origin}&destination=${destination}`)
      if(response.data[0]){
        let driveTimeSeconds = response.data[0].drive_time_seconds;
        lesson.driveTime = Math.ceil(driveTimeSeconds / 60);
      } else { lesson.driveTime = 0 }
      // console.log('RESPONSE', response.data);
      return lesson
    }))
    return updatedLessons;
  }

  updateLessons()
    .then(updatedLessons => {
      let lessonsWithNeighboringDrives = updatedLessons.map((lesson, index, arr) => {
        // if there is no previous lesson that day, prev_lesson_drive = 0
        // if there is no next lesson that day, next_lesson_drive = 0
        // otherwise, lesson.prev_lesson_drive = prevLesson.driveTime
        let prevLesson = arr[index - 1];
        let nextLesson = arr[index + 1];
        if(!prevLesson || (prevLesson.date !== lesson.date) || prevLesson.teacher_id !== lesson.teacher_id){
          lesson.prev_lesson_drive = 0;
        } else {lesson.prev_lesson_drive = prevLesson.driveTime }
        if(!nextLesson || (nextLesson.date !== lesson.date) || nextLesson.teacher_id !== lesson.teacher_id){
          lesson.next_lesson_drive = 0;
        } else {lesson.next_lesson_drive = nextLesson.driveTime };
        return lesson;
      })
      req.body.lessonData = lessonsWithNeighboringDrives;
      // console.log('REQUEST BODY', req.body)
      next();
      // res.status(200).send("DriveTimes Updated")
    })
    .catch(console.error);
  }

  module.exports = fetchDriveTimes;