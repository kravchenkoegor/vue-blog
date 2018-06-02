const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: String,
  location: String,
  dateOfBirth: String
})

// Encrypt password before saving to database
userSchema.pre('save', function(next) {
  const user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.hash(user.password, 10, (error, hash) => {
      if (error) {
        return next(error)
      }
      user.password = hash
      next()
    })
  } else {
    return next()
  }
})

mongoose.model('authUsers', userSchema)
