const express = require('express');
const router = express.Router();
const controller = require('../controllers/driveTimes');

router.get('/', controller.getDriveTime);

module.exports = router;