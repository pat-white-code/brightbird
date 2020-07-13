const express = require('express');
const router = express.Router()
const controller = require('./../controllers/availabilities');
const requests = require('../controllers/requests');

router.get('/client/:clientId', controller.getAvailabilitiesByClient);
router.get('/:clientId', controller.getAvailabilities);
router.get('/request/:requestId/teacher/:teacherId', controller.getTeacherAvailabilitiesByRequest);

router.post('/post', controller.createTeacherAvailabilities);

router.get('/refresh/all', 
  requests.getAllRequests,
  controller.refreshAvailabilities
  );

router.get('/refresh/user/:clientId',
  // delete all availabilities with userId
  controller.deleteClientAvailabilities,
  // get all requests from user
  requests.getClientRequestsNext,
  // create new availabilities
  controller.refreshAvailabilities
)

module.exports = router;