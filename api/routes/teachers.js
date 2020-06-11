const express = require('express');
const router = express.Router();
const controller = require('../controllers/teachers');

router.get('/', controller.getTeachers);
router.get('/all', controller.getAllTeachers);
router.get('/two', controller.getTeachersForTwo);

router.post('/signup', controller.teacherSignup);
router.post('/auth/login', controller.loginTeacher);


module.exports = router;