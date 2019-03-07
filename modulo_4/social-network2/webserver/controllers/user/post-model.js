'use strict';
//crear post-model.js para upload de post

const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const postSchema = new Schema({
  owner: String,
  author: String,
  content: String,
  createdAt: Date,
  comments: [{
    author: String,
    comment: String,
    created_at: Date,
    deleted_at: Date,
  }],
  likes: [String],
  deletedAt: Date,

});


const User = mongoose.model('Post', postSchema);

module.exports = Post;
//crear post-model.js para upload de post
//campos:
//Autor
//Content:
//Create_date:
//Comments {
//	author:
//	comment:
//	created_at:
//	deleted_at:
//}
//
//
//Publicacion en muro de amigo.
//generacion de endpoint.