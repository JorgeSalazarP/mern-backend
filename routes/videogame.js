'use strict';

const express = require('express');
const router = express.Router();

const { list, create } = require('../controllers/videogameController');

router.get('/videogames',list);
router.get('/create',create);



module.exports = router;