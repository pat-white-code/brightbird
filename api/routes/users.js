const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.post('/', 
  controller.createUser,
  controller.emailNewUser);

router.post('/auth/login', controller.loginUser);

module.exports = router;