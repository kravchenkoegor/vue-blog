const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = {
  async register(req, res) {
    try {
      const user = await new User(req.body).save();
      res.json(user);
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        res.status(404).send({ success: false, message: 'User not found' });
        return;
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        res.status(401).send({ success: false, message: 'Wrong password' });
        return;
      }

      const token = jwt.sign(user.toJSON(), process.env.SECRET, {
        expiresIn: 604800, // 1 week
      });
      res.json({
        success: true,
        token: `jwt ${token}`,
        user: user.toJSON(),
      });
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },

  async getUser(req, res) {
    try {
      const user = await User.findById(req.body.id);
      res.json(user);
    } catch (error) {
      res.status(400).send({
        error: `An error has occured ${error}`,
      });
    }
  },

  async saveUser(req, res) {
    try {
      const newUser = await User.findByIdAndUpdate(req.body._id, req.body);
      console.log(newUser);
      res.json({ success: true, message: 'User has been updated' });
    } catch (error) {
      res.status(400).send({
        error: `An error has occured ${error}`,
      });
    }
  },
};
