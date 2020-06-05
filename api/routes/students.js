const express = require('express');
const router = express.Router();
const controller = require('../controllers/students');

router.get('/', controller.getStudents);
router.get('/lessons/:student_id', controller.getLessonsByStudent);
router.get('/client/:clientId', controller.getStudentsByClient);

router.post('/', controller.postStudent);

module.exports = router;


// TODO: look at the module that pulls addresses for teacher availability. It should reference lesson.address_id instead of student address_id. Then we can take out student.address_id becuase students should not have a fixed address. Lessons should have a fixed address. 