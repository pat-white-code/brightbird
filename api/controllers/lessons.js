const takeAttendance = require('./modules/lessons/takeAttendance');
const bulkTakeAttendance = require('./modules/lessons/bulkTakeAttendance');
const getUnloggedLessons = require('./modules/lessons/getUnloggedLessons');
const getLastLesson = require('./modules/lessons/getLastLesson');
const getLessonsByTeacherMonth = require('./modules/lessons/getLessonsByTeacherMonth');
const getLessonsByTeacherDate = require('./modules/lessons/getLessonsByTeacherDate');
const getLessonsByUser = require('./modules/lessons/getLessonsByUser');
const deleteLessonsBySub = require('./modules/lessons/deleteLessonsBySub');
const getLessonsByTeacher = require('./modules/lessons/getLessonsByTeacher');

module.exports = {
  takeAttendance,
  bulkTakeAttendance,
  getUnloggedLessons,
  getLastLesson,
  getLessonsByTeacherMonth,
  getLessonsByTeacherDate,
  getLessonsByUser,
  deleteLessonsBySub,
  getLessonsByTeacher
}