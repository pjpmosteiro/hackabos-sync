'use strict';

const express = require('express');
const createAccount = require('../controllers/account/create-account');
const activateAccount = require('')

const accountRouter = express.Router();

accountRouter.post('/account', createAccount);
accountRouter.get('/account/activate');
module.exports = accountRouter;