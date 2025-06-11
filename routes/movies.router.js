const express = require('express');
const router = express.Router();
const{ readData, insertData, updateData, deleteData} = require('../controllers/movies.controller');

router.get('/',readData)
router.post('/',insertData);

router.put('/:id',updateData)
router.delete('/:id',deleteData);

module.exports = router;
