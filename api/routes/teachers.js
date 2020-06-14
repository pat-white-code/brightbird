const express = require('express');
const router = express.Router();
const controller = require('../controllers/teachers');

router.get('/', controller.getTeachers);
router.get('/all', controller.getAllTeachers);
router.get('/two', controller.getTeachersForTwo);
router.get('/:teacherId/instruments', controller.getTeacherInstruments);
router.get('/:teacherId/zip-codes', controller.getZipCodesByTeacher);

router.post('/signup', controller.teacherSignup);
router.post('/auth/login', controller.loginTeacher);
router.post('/instrument/add/:teacherId', controller.addTeacherInstrument);
router.post('/zip-code', controller.createTeacherZipCode);


module.exports = router;