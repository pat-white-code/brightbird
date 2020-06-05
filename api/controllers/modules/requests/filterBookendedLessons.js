// The purpose of this middleware function is to take an array of lessons, and filter lessons that are closed on both sides, meaning the lesson before it ends less than or equal to 30 minutes of this one starting and the one after it starts within 30 minutes of this one ending. 

// This will reduce the amount of drive times we need to fetch.

// After this function, the data should go to fetch drive times

const moment = require('moment');

const filterBookendedLessons = (req, res, next) => {
  let lessonData = req.body.lessonData;
  lessonData.forEach(lesson => {
    lesson.startMoment = moment(lesson.lesson_time_stamp, 'YYYY-MM-DDTHH:mm:ss Z');
    lesson.endMoment = lesson.startMoment.clone().add(lesson.lesson_duration, 'minutes');
  })

  for(let i = 0 ; i < lessonData.length ; i++) {
    let prevLesson = lessonData[i-1];
    let nextLesson = lessonData[i+1];
    let lesson = lessonData[i];
    lesson.openEnded = true;

    // IF there is no previous lesson, or if the previous lesson has a different date
    if(!prevLesson || (prevLesson.date_ !== lesson.date_) || prevLesson.teacher_id !== lesson.teacher_id){
      prevLesson = {}
      prevLesson.endMoment = moment(lesson.day_start_time, 'YYYY-MM-DDTHH:mm:ss Z');
    }
    lesson.prev_lesson_endMoment = prevLesson.endMoment;

    // IF there is no previous lesson, or if the previous lesson has a different date
    if(!nextLesson || (nextLesson.date_ !== lesson.date_) || (nextLesson.teacher_id !== lesson.teacher_id)){
      nextLesson = {}
      nextLesson.startMoment = moment(lesson.day_end_time, 'YYYY-MM-DDTHH:mm:ss Z')
    }
    lesson.next_lesson_startMoment = nextLesson.startMoment;

    //if next lesson starts 30 minutes or less after this lesson ends and previous lesson ended 30 minutes or less before this lesson starts
    if((nextLesson.startMoment.valueOf() - lesson.endMoment.valueOf() < 1800000) && (lesson.startMoment.valueOf() - prevLesson.endMoment.valueOf() < 1800000)) {
      lesson.openEnded = false
    }
  }
  lessonData = lessonData.filter(lesson => lesson.openEnded)

  req.body.lessonData = lessonData;
  // console.log('REQ BODY LESSONDATA:', req.body.lessonData)
  next();
  // res.send('bookended lessons filtered');
}

module.exports = filterBookendedLessons;