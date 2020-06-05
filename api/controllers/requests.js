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
  editRequest
};