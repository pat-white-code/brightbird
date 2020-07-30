const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscriptions');
const lessons = require('../controllers/lessons');

router.get('/client/:clientId', controller.getClientSubscriptions);
router.get('/requests/client/:clientId', controller.getClientRequests);
router.get('/:subscriptionId', controller.getSubscriptionInfo);
router.get('/teacher/:teacherId', controller.getSubsByTeacher);

router.post('/', controller.postSubscription, controller.postSubscriptionLessons, controller.mailNewSubscription);

router.post('/mailTest', controller.mailTest);

// router.put('/deactivate/:subscriptionId', 
//   controller.endSubscription,
//   controller.deleteLessons,
//   controller.mailDeactivatedSubscription
//   );

router.delete('/deactivate/:subId',
  controller.deleteSub,
  lessons.deleteLessonsBySub
)

router.put('/edit/:subId', 
  controller.putSubscription,
  lessons.deleteLessonsBySub);

router.put('/:subscriptionId', 
  // req.query.edit = true
  controller.putSubscription)
  
// UPDATE LESSON
// IF updateSubscription === TRUE, 
  // update the subscription
  // delete all lessons after original date
  // create new lessons starting after startDate
router.put('/lesson/:lessonId/:subscriptionId', 
  controller.putLesson, 
  // edits a single lesson

  controller.putSubscription, 
  // changes the subscription

  controller.deleteLessons, 
  // deletes the old lessons

  controller.postSubscriptionLessons, 
  // posts new lessons at the new subscription

  controller.mailNewSubscription);
  // mailes new subscription information

module.exports = router;