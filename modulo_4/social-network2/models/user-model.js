'use strict';

const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const userSchema = new Schema({
  uuid: {
    type: String,
    unique: true,
  },
  friends: [],
  avatarUrl: String,
  fullName: String,
  preferences: {
    isPublicProfile: Boolean,
    linkedIn: String,
    twitter: String,
    github: String,
    description: String,
  },
});
// indexamos el esquema- TEST

userSchema.index({
  fullName: 'text',
  'preferences.linkedIn': 'text',
  'preferences.twitter': 'text',
  'preferences.github': 'text'
}, );

const User = mongoose.model('User', userSchema);

module.exports = User;