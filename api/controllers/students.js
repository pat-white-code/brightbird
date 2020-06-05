const getLessonsByStudent = require('./modules/students/getLessonsByStudent');
const getStudents = require('./modules/students/getStudents');
const postStudent = require('./modules/students/postStudent');
const getStudentsByClient = require('./modules/students/getStudentsByClient')

module.exports = {
  getLessonsByStudent,
  getStudents,
  postStudent,
  getStudentsByClient
}