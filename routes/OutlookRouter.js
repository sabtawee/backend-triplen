const express = require('express');
const {  SendMail } = require('../controllers/OutlookController');

const router = express.Router();

router.get('/sendmail', SendMail);

module.exports = router;