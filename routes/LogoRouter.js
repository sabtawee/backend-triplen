const express = require('express');
const { createLogo, getLogo, deleteLogo, updateLogo } = require('../controllers/LogoController');


const router = express.Router();

router.get('/', getLogo);
router.post('/create', createLogo);
router.delete('/delete/:id', deleteLogo);
router.put('/update/:id', updateLogo);

module.exports = router;