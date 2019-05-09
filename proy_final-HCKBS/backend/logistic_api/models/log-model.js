'use strict';

const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const postSchema = new Schema({
  date: Date,
  remit: String,
  dest: String,
  user: Number,
  status: {
    type: String,
    default: 'Registrado',
  },
});

const Log = mongoose.model('Post', postSchema);

module.exports = Log;
