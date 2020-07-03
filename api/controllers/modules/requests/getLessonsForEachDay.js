const axios = require('axios');
const moment = require('moment');
// map each schedule-day
//  For that schedule-day
const getLessonsForEachDay = (req, res) => {
  const fetchLessons = async () => {
    let schedules = req.body.schedules;
    let schedulesWithLessons = await Promise.all(schedules.map(async schedule => {
      let {teacher_id, date_} = schedule;
      let date = moment(date_).format('YYYY-MM-DD');
      console.log('teacher_id', teacher_id);
      console.log('date:', date);
      let lessonsThatDay = await axios.get(`http://localhost:3000/api/lessons/teacher-date/?teacherId=${teacher_id}&date=${date}`)
      console.log('lessonsThatDay DATA', lessonsThatDay.data);
      let data = lessonsThatDay.data
      schedule.lessons_this_day = data
      return schedule;
      // if (!lessonsThatDay.data) {
      //   schedule.data = 'NO LESSONS THIS DAY'
      //   return schedule
      // } else {
      //   lessonsThatDay.data.forEach(lesson => {
      //     lesson.day_start = schedule.start_time;
      //     lesson.day_end = schedule.end_time;
      //     lesson.max_drive = schedule.max_drive
      //   })
      //   return [...lessonsThatDay]
      // }
    }))
    return schedulesWithLessons
  }

  fetchLessons()
    .then(lessons => {
      console.log('LESSONS', lessons)
      req.body.lessons = lessons
      console.log('REQ BODY LESSONS', req.body.lessons)
      res.send('Lessons fetched')
    })
    .catch(err => res.status(500).send(err))
}

module.exports = getLessonsForEachDay;