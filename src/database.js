require('dotenv').config();

// const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const User = require('./models/user.model');

module.exports = {
  // User,
  // async comparePassword(password, hash) {
  //   try {
  //     const valid = await bcrypt.compare(password, hash);
  //     return valid;
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  async connect() {
    try {
      await mongoose.connect(process.env.PROD_MONGODB, {
        keepAlive: 300000,
        connectTimeoutMS: 30000,
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (error) {
      throw error;
    }
  },
};
