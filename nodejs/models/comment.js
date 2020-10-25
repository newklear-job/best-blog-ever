const mongoose = require('mongoose')
const { userSchema } = require('./user.js');

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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
  }, 
})

module.exports = mongoose.model('Comment', commentSchema)