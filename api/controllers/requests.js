const getClientRequests = require('./modules/requests/getClientRequests');
const postRequest = require('./modules/requests/postRequest');
const mailRequest = require('./modules/requests/mailRequest');
const getRequestInfo = require('./modules/requests/getRequestInfo');
const getScheduleDataByRequest = require('./modules/requests/getScheduleDataByRequest');
const fetchDriveTimes = require('./modules/requests/fetchDriveTimes');
const filterBookendedLessons = require('./modules/requests/filterBookendedLessons');
const calculateTeacherAvailabilities = require('./modules/requests/calculateTeacherAvailabilities');
const getTeachersForRequest = require('./modules/requests/getTeachersForRequest');
const getSchedulesByTeacher = require('./modules/requests/getSchedulesByTeacher');
const getTeachersByRequest = require('./modules/requests/getTeachersByRequest');
const deleteRequest = require('./modules/requests/deleteRequest');
const editRequest = require('./modules/requests/editRequest');
const getSchedulesByRequest = require('./modules/requests/getSchedulesByRequest');
const getLessonsForEachDay = require('./modules/requests/getLessonsForEachDay');
const filterBookendedLessons2 = require('./modules/requests/filterBookendedLessons2');
const availabilityFromBlankDays = require('./modules/requests/availabilityFromBlankDays');
const fetchDriveTimes2 = require('./modules/requests/fetchDriveTimes2');
const calculateTeacherAvailabilities2 = require('./modules/requests/calculateTeacherAvailabilities2');
const getAllRequests = require('./modules/requests/getAllRequests');
const getClientRequestsNext = require('./modules/requests/getClientRequestsNext');

module.exports = {
  postRequest, 
  getClientRequests,
  mailRequest,
  getRequestInfo,
  getScheduleDataByRequest,
  fetchDriveTimes,
  filterBookendedLessons,
  calculateTeacherAvailabilities,
  getTeachersForRequest,
  getSchedulesByTeacher,
  getTeachersByRequest,
  deleteRequest,
  editRequest,
  getSchedulesByRequest,
  getLessonsForEachDay,
  filterBookendedLessons2,
  availabilityFromBlankDays,
  fetchDriveTimes2,
  calculateTeacherAvailabilities2,
  getAllRequests,
  getClientRequestsNext
};