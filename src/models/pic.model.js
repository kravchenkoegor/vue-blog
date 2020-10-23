const { Schema, model } = require('mongoose');

const Pic = model(
  'photos',
  new Schema({
    type: String,
    url: String,
  })
);

module.exports = Pic;
