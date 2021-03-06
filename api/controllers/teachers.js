const getTeachers = require('./modules/teachers/getTeachers');
const getAllTeachers = require('./modules/teachers/getAllTeachers');
const getTeachersForTwo = require('./modules/teachers/getTeachersForTwo');
const teacherSignup = require('./modules/teachers/teacherSignup');
const loginTeacher = require('./modules/teachers/loginTeacher');
const getTeacherInstruments = require('./modules/teachers/getTeacherInstruments');
const addTeacherInstrument = require('./modules/teachers/addTeacherInstrument');
const createTeacherZipCode = require('./modules/teachers/createTeacherZipCode');
const getZipCodesByTeacher = require('./modules/teachers/getZipCodesByTeacher');
const deleteZipCode = require('./modules/teachers/deleteZipCode');
const editMaxDrive = require('./modules/teachers/editMaxDrive');
const getTeacherInfo = require('./modules/teachers/getTeacherInfo');
const getTeacherWeek = require('./modules/teachers/getTeacherWeek');
const createTeacherWeek = require('./modules/teachers/createTeacherWeek');
const deleteTeacherWeek = require('./modules/teachers/deleteTeacherWeek');
const deleteTeacherInstrument = require('./modules/teachers/deleteTeacherInstrument');

module.exports = {
  getTeachers,
  getAllTeachers,
  getTeachersForTwo,
  teacherSignup,
  loginTeacher,
  getTeacherInstruments,
  addTeacherInstrument,
  createTeacherZipCode,
  getZipCodesByTeacher,
  deleteZipCode,
  editMaxDrive,
  getTeacherInfo,
  getTeacherWeek,
  createTeacherWeek,
  deleteTeacherWeek,
  deleteTeacherInstrument
};