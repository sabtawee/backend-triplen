const express = require('express');
const { getAllNews, createNews, updateNews, deleteNews, getAllNewsById } = require('../controllers/NewsController');

const router = express.Router();

router.get('/', getAllNews);
router.get('/:id', getAllNewsById);
router.post('/create', createNews);
router.put('/update/:id', updateNews);
router.delete('/delete/:id', deleteNews);



module.exports = router;