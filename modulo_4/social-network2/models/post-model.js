'use strict';

const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const postSchema = new Schema({
  owner: String,
  author: String,
  content: String,
  likes: [String],
  comments: [{
    message: String,
    createdAt: Date,
    author: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: Date,
});

const Post = mongoose.model('Post', postSchema);

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