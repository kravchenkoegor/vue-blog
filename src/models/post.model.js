const { Schema, model } = require('mongoose');

const Post = model(
  'posts',
  new Schema({
    author: {
      type: String,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now(),
    },
    title: String,
    image: String,
    text: String,
  })
);

module.exports = Post;
