const express = require('express');
const router = express.Router();
const controller = require('../controllers/requests');
const avails = require('../controllers/availabilities');

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