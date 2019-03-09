'use strict';

const express = require('express');
const multer = require('multer');

const getUserProfile = require('../controllers/user/get-user-profile');
const checkJwtToken = require('../controllers/session/check-jwt-token');
const updateUserProfile = require('../controllers/user/update-user-profile');
const uploadAvatar = require('../controllers/user/upload-avatar');
const searchUsers = require('../controllers/user/search-user');

const addFriendRequest = require('../controllers/user/add-friend-request');
// const acceptFriendRequest = require ('../controllers/user/accept-friend-request');

const upload = multer();
const router = express.Router();

router.get('/user', checkJwtToken, getUserProfile);
router.put('/user', checkJwtToken, updateUserProfile);
router.post('/user/avatar', checkJwtToken, upload.single('avatar'), uploadAvatar);

router.get('/user/search', checkJwtToken, searchUsers);
router.post('/user/friendrequest', checkJwtToken, addFriendRequest);
router.post('/user/friendrequest/accept', checkJwtToken, (req, res, next) => {
  res.status(200).send();
});

module.exports = router;
