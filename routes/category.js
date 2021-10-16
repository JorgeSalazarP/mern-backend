'use strict';

const express = require('express');
const router = express.Router();

const { create, list } = require('../controllers/categoryController');

router.get('/categories',list);
router.post('/create',create);



module.exports = router;