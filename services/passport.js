// edit ..
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
       // we already have a record with the given profile ID
          // use done and since it passed the condition use null as the 
          // first argument and then existingUser as the second argument
      if (existingUser) {
        return done(null, existingUser);
      }

      // we don't have a user record with this ID, make a new record
          // and the 'user'  will at this point have the most updated 
          // version of the user
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
