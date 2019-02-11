const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../api/models/User');
const config = require('../config/config');

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secret;

module.exports = passport => {
  passport.use(
    new JWTStrategy(opts, (jwt_paylod, done) => {
      User.findById(jwt_paylod.id)
      .then(user => {
        if(!user) return done(null, false);
        return done(null, user);
      })
      .catch(err => console.log(err));
    })
  )
}