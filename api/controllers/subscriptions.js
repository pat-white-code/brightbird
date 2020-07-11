const getClientSubscriptions = require('./modules/subscriptions/getClientSubscriptions');
const getClientRequests = require('./modules/subscriptions/getClientRequests');
const postSubscription = require('./modules/subscriptions/postSubscription');
const postSubscriptionLessons = require('./modules/subscriptions/postSubscriptionLessons');
const mailNewSubscription = require('./modules/subscriptions/mailNewSubscription');
const getSubscriptionInfo = require('./modules/subscriptions/getSubscriptionInfo');
const getTeacherSubscriptions = require('./modules/subscriptions/getTeacherSubscriptions');
const putSubscription = require('./modules/subscriptions/putSubscription');
const putLesson = require('./modules/subscriptions/putLesson');
const deleteLessons = require('./modules/subscriptions/deleteLessons');
const deleteSub = require('./modules/subscriptions/deleteSub');
const mailDeactivatedSubscription = require('./modules/subscriptions/mailDeactivatedSubscription');
const mailTest = require('./modules/subscriptions/mailTest');

module.exports = {
  getClientSubscriptions,
  getClientRequests,
  postSubscription,
  postSubscriptionLessons,
  mailNewSubscription,
  getSubscriptionInfo,
  getTeacherSubscriptions,
  putSubscription,
  putLesson,
  deleteLessons,
  deleteSub,
  mailDeactivatedSubscription,
  mailTest
}