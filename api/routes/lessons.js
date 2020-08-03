const express = require('express');
const router = express.Router();
const controller = require('../controllers/lessons');

router.get('/unlogged/:teacherId', controller.getUnloggedLessons);
router.get('/last/:subscriptionId', controller.getLastLesson);
router.get('/teacher/month/:teacherId', controller.getLessonsByTeacherMonth);
router.get('/teacher-date/', controller.getLessonsByTeacherDate);
router.get('/user/:userId', controller.getLessonsByUser);
router.get('/teacher/:teacherId', controller.getLessonsByTeacher);

router.put('/:lessonId/attendance', controller.takeAttendance);
router.put('/attendance/bulk', controller.bulkTakeAttendance);

router.delete('/delete/:lessonId', controller.deleteLesson);


module.exports = router;