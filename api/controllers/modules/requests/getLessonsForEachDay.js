const axios = require('axios');
const moment = require('moment');
// map each schedule-day
//  For that schedule-day
const getLessonsForEachDay = (req, res, next) => {
  const { requestId } = req.body;
  req.body.lessonData = [];
  req.body.blankDays = [];
  const fetchLessons = async () => {
    let schedules = req.body.schedules;
    let schedulesWithLessons = await Promise.all(schedules.map(async schedule => {
      let {teacher_id, date_} = schedule;
      let date = moment(date_).format('YYYY-MM-DD');
      console.log('teacher_id', teacher_id);
      console.log('date:', date);
      let lessonsThatDay = await axios.get(`http://localhost:3000/api/lessons/teacher-date/?teacherId=${teacher_id}&date=${date}&requestId=${requestId}`)
      console.log('lessonsThatDay DATA', lessonsThatDay.data);
      let data = lessonsThatDay.data
      if(!data[0]) {
        req.body.blankDays.push(schedule)
      }
      data.forEach(lesson => {
        lesson.day_start_time = schedule.start_time;
        lesson.day_end_time = schedule.end_time;
      })
      schedule.lessons_this_day = data
      req.body.lessonData.push(...data)
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
      // console.log('LESSONS', lessons)
      req.body.lessons = lessons
      console.log('LessonData', req.body.lessonData);
      console.log('Blank Days', req.body.blankDays);
      // res.send('Lessons fetched')
      next();
    })
    .catch(err => res.status(500).send(err))
}

module.exports = getLessonsForEachDay;