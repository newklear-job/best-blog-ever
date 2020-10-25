const mongoose = require('mongoose')
const { userSchema } = require('./user.js');
const { categorySchema } = require('./category.js');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  categories: [
    categorySchema
  ],
  user: {
    userSchema
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }, 
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports.postSchema = postSchema;
module.exports.Post = mongoose.model('Post', postSchema)