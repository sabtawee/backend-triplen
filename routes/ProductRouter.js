const express = require('express');
const { getAllProducts, addProduct } = require('../controllers/ProductController');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/create', addProduct);

module.exports = router;