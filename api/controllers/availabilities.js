const createTeacherAvailabilities = require('./modules/availabilities/createTeacherAvailabilities');
const getAvailabilitiesByClient = require('./modules/availabilities/getAvailabilitiesByClient');
const getAvailabilities = require('./modules/availabilities/getAvailabilities');
const getTeacherAvailabilitiesByRequest = require('./modules/availabilities/getTeacherAvailabilitiesByReq');
const deleteAvailsByRequest = require('./modules/availabilities/deleteAvailsByRequest');
const createTeacherAvailabilities2 = require('./modules/availabilities/createTeacherAvailabilities2');
const refreshAvailabilities = require('./modules/availabilities/refreshAvailabilities');
const deleteClientAvailabilities = require('./modules/availabilities/deleteClientAvailabilities');

module.exports = {
  createTeacherAvailabilities,
  getAvailabilitiesByClient,
  getAvailabilities,
  getTeacherAvailabilitiesByRequest,
  deleteAvailsByRequest,
  createTeacherAvailabilities2,
  refreshAvailabilities,
  deleteClientAvailabilities
}