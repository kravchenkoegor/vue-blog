const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  title: String,
  image: String,
  text: String
})

module.exports = Post = mongoose.model('posts', postSchema)