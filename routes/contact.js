const path = require('path');

const express = require('express');

const router = express.Router();

const formController = require('../controllers/form');

router.get('/contactus', formController.getContactus1);

router.post('/contactus', formController.postContactus);    

router.get('/sucess', formController.getContactus);


module.exports = router;