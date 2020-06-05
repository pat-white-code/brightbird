const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedules');

router.get('/:teacher_id', controller.getTeacherSchedule);
router.get('/lessons/:schedule_id', controller.getLessonsByScheduleId);
router.get('/recurring/:teacherId', controller.getRecurringSchedules);
router.get('/request/:requestId', controller.getSchedulesByRequest);


router.post('/recurring/:teacherId', controller.postRecurringSchedule, controller.postSchedules);

module.exports = router;