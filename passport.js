const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "306698060316-o39h5dfbkc5da3e6s8q2ehg6rpftmgpq.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
  }
));