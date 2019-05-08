'use strict';

const express = require('express');

const getUserProfile = require('../controllers/user/get-user-profile');
const checkJwtToken = require('../controllers/session/check-jwt-token');
const updateUserProfile = require('../controllers/user/update-user-profile');
const searchUsers = require('../controllers/user/search-user');
// const getUserWall = require('../controllers/user/get-user-wall');

const router = express.Router();

router.get('/user', checkJwtToken, getUserProfile);
router.put('/user', checkJwtToken, updateUserProfile);
router.get('/user/search', checkJwtToken, searchUsers);
// router.get('/user/wall', checkJwtToken, getUserWall);


module.exports = router;
