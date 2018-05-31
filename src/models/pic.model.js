const mongoose = require ('mongoose')

const picSchema = new mongoose.Schema({
  type: String,
  url: String
})

module.exports = Pic = mongoose.model('photos', picSchema)
