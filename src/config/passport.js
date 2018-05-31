const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const database = require('../database')
const config = require('./main')

module.exports = (passport) => {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
  opts.secretOrKey = config.secret
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    database.User.findOne({_id: jwt_payload._id}, (error, user) => {
      if (error) {
        return done(error, false)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  }))
}
