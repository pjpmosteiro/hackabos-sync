'use strict';
const mongoose = require('mongoose');
const User = require('../../../models/user-model.js')
async function getUserProfile(req, res, next) {

  try {
    const userDataProfileMongose = dot.dot(userDataProfile);
    const data = await UserModel.findOne({
      uuid: claims.uuid
    }, userDataProfileMongoose);
    console.log('mongose data', data);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }

  return res.send(req.claims);
}




module.exports = getUserProfile;