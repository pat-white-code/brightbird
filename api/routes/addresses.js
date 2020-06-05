const express = require('express');
const router = express.Router();
const controller = require('../controllers/addresses');

router.post('/:userId', controller.createAddress);

router.get('/request/:requestId', controller.getAddressByRequest);

router.get('/client/:clientId', controller.getAddressesByClient);



module.exports = router;