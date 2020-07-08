const express = require('express');
const router = express.Router();
const controller = require('../controllers/requests');
const avails = require('../controllers/availabilities');
const schedules = require('../controllers/schedules');

router.get('/client/:clientId', controller.getClientRequests);
router.get('/:requestId', controller.getRequestInfo);
router.get('/teachers/:requestId', controller.getTeachersByRequest);

router.post('/', 
  controller.postRequest, 
  controller.getScheduleDataByRequest, 
  controller.filterBookendedLessons, 
  controller.fetchDriveTimes,
  controller.calculateTeacherAvailabilities,
  avails.createTeacherAvailabilities
  );

router.post('/test', 
  controller.postRequest,
  controller.getTeachersForRequest,
  controller.getSchedulesByTeacher
);

router.post('/new',
  controller.postRequest,
  controller.getSchedulesByRequest,
  controller.getLessonsForEachDay,
  controller.filterBookendedLessons2,
  controller.availabilityFromBlankDays
)

// Post request,
// Get schedules by teachers who match that instrument
// For each schedule, fetch lessons for that lesson day. If there is no lesson, attach to request body as blank days. Otherwise attach to body as lessons.
// For each lesson, filter bookended lessons, etc.
// For each blank day, create availabilities every 30-min starting at the start time until the end time.
// Add both of these results to teacher availabilities.

router.put('/edit',
  avails.deleteAvailsByRequest,
  controller.editRequest,
  // same process as new request
  controller.getScheduleDataByRequest, 
  controller.filterBookendedLessons, 
  controller.fetchDriveTimes,
  controller.calculateTeacherAvailabilities,
  avails.createTeacherAvailabilities
  );

router.delete('/delete/:requestId', controller.deleteRequest);



module.exports = router;