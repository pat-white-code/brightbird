const getTeacherSchedule = require('./modules/schedules/getTeacherSchedule');
const getLessonsByScheduleId = require('./modules/schedules/getLessonsByScheduleId');
const postSchedules = require('./modules/schedules/postSchedules');
const getRecurringSchedules = require('./modules/schedules/getRecurringSchedules');
const getSchedulesByRequest = require('./modules/schedules/getSchedulesByRequest');
const deleteSchedules = require('./modules/schedules/deleteSchedules');
const getSchedulesByExperience = require('./modules/schedules/getSchedulesByExperience');

module.exports = {
  getTeacherSchedule,
  getLessonsByScheduleId,
  postSchedules,
  getRecurringSchedules,
  getSchedulesByRequest,
  deleteSchedules,
  getSchedulesByExperience
}
