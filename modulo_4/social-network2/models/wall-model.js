'use strict';

const mongoose = require('mongoose');

const Schema = require('Post');
const ObjetID = Schema;

const {
  Schema
} = mongoose;

const wallModel = new Schema({
  uuid: {
    type: String,
    unique: true,
  },
  post: [Schema.Types.ObjectID],
})

const Wall = mongoose.model('Wall', wallSchema);

module.exports = Wall;