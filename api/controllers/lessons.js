const takeAttendance = require('./modules/lessons/takeAttendance');
const bulkTakeAttendance = require('./modules/lessons/bulkTakeAttendance');
const getUnloggedLessons = require('./modules/lessons/getUnloggedLessons');
const getLastLesson = require('./modules/lessons/getLastLesson');
const getLessonsByTeacher = require('./modules/lessons/getLessonsByTeacher');

module.exports = {
  takeAttendance,
  bulkTakeAttendance,
  getUnloggedLessons,
  getLastLesson,
  getLessonsByTeacher
}