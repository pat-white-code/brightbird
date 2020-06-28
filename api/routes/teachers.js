const express = require('express');
const router = express.Router();
const controller = require('../controllers/teachers');
const schedules = require('../controllers/schedules');

router.get('/', controller.getTeachers);
router.get('/all', controller.getAllTeachers);
router.get('/two', controller.getTeachersForTwo);
router.get('/:teacherId/instruments', controller.getTeacherInstruments);
router.get('/:teacherId/zip-codes', controller.getZipCodesByTeacher);
router.get('/:teacherId', controller.getTeacherInfo);
router.get('/:teacherId/week', controller.getTeacherWeek);

router.post('/signup', controller.teacherSignup);
router.post('/auth/login', controller.loginTeacher);
router.post('/instrument/add/:teacherId', controller.addTeacherInstrument);
router.post('/zip-code', controller.createTeacherZipCode);
router.post('/week', controller.createTeacherWeek, schedules.postSchedules);

router.delete('/zip-code/:zipCodeId', controller.deleteZipCode);
router.delete('/week/:weekId', controller.deleteTeacherWeek);

router.put('/max-drive', controller.editMaxDrive, schedules.postSchedules);

module.exports = router;