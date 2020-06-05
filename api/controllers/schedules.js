const getTeacherSchedule = require('./modules/schedules/getTeacherSchedule');
const getLessonsByScheduleId = require('./modules/schedules/getLessonsByScheduleId');
const postSchedules = require('./modules/schedules/postSchedules');
const postRecurringSchedule = require('./modules/schedules/postRecurringSchedule');
const getRecurringSchedules = require('./modules/schedules/getRecurringSchedules');
const getSchedulesByRequest = require('./modules/schedules/getSchedulesByRequest');

module.exports = {
  getTeacherSchedule,
  getLessonsByScheduleId,
  postSchedules,
  postRecurringSchedule,
  getRecurringSchedules,
  getSchedulesByRequest
}
