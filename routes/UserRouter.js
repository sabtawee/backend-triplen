const express = require('express');

const { login, authen} = require('../controllers/UserController');

const router = express.Router();

router.post('/login', login);
router.get('/authen', authen);

module.exports = router;