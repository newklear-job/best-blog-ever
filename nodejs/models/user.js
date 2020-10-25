const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true 
  },
  password: { 
    type: String,
    required: true 
  },
  firstName: { 
    type: String,
    required: true 
  },
  lastName: { 
    type: String,
    required: true 
  },
  avatar: { 
    type: String,
    required: true 
  },
  aboutMe: { 
    type: String,
    required: true 
  },
  socials: {
    facebook: { 
      type: String,
      required: true 
    },
    twitter: { 
      type: String,
      required: false 
    },
    instagram: { 
      type: String,
      required: false 
    },
    linkedIn: { 
      type: String,
      required: false 
    },
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

module.exports.userSchema = userSchema;
module.exports.User = mongoose.model('User', userSchema)