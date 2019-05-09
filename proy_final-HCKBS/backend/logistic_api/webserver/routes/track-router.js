'use strict';

const express = require('express');
const checkJwtToken = require('../controllers/session/check-jwt-token');
const createTrack = require('../controllers/post/create-track');

const router = express.Router();

router.post('/new', checkJwtToken, createTrack);

module.exports = router;
