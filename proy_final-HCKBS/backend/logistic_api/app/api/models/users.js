// Modelo de usuario
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  "email": {
    type: String,
    trim: false,
    required: true
  },
  "password": {
    type: String,
    trim: false,
    required: true
  }
});
// hash user password before saving into database, so Jose can´t say I don´t protect the users :)
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
module.exports = mongoose.model('User', UserSchema);