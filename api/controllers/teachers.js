const getTeachers = require('./modules/teachers/getTeachers');
const getAllTeachers = require('./modules/teachers/getAllTeachers');
const getTeachersForTwo = require('./modules/teachers/getTeachersForTwo');
const teacherSignup = require('./modules/teachers/teacherSignup');
const loginTeacher = require('./modules/teachers/loginTeacher');
const getTeacherInstruments = require('./modules/teachers/getTeacherInstruments');
const addTeacherInstrument = require('./modules/teachers/addTeacherInstrument');
const createTeacherZipCode = require('./modules/teachers/createTeacherZipCode');

module.exports = {
  getTeachers,
  getAllTeachers,
  getTeachersForTwo,
  teacherSignup,
  loginTeacher,
  getTeacherInstruments,
  addTeacherInstrument,
  createTeacherZipCode
};