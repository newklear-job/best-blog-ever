const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  slug: { 
    type: String,
    required: true 
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

module.exports.categorySchema = categorySchema;
module.exports.Category = mongoose.model('Category', categorySchema)