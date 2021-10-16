'use strict';

const express = require('express');
const router = express.Router();

const { create, list, remove } = require('../controllers/categoryController');

router.get('/categories',list);
router.delete('/:id',remove);
router.post('/create',create);



module.exports = router;