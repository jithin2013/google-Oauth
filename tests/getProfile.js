

const GoogleStrategy = require('passport-google-oauth20').Strategy
, chai = require('chai');

describe('Strategy', function() {

describe('constructed', function() {
  const strategy = new GoogleStrategy({
    clientID: "306698060316-o39h5dfbkc5da3e6s8q2ehg6rpftmgpq.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  }, function() {});
  
  it('should be named google', function() {
    expect(strategy.name).to.equal('google');
  });
})

describe('constructed with undefined options', function() {
  it('should throw', function() {
    expect(function() {
      const strategy = new GoogleStrategy(undefined, function(){});
    }).to.throw(Error);
  });
})

describe('authorization request with documented parameters', function() {
  const strategy = new GoogleStrategy({
    clientID: "306698060316-o39h5dfbkc5da3e6s8q2ehg6rpftmgpq.apps.googleusercontent.com",
    clientSecret: "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",
  }, function() {});
  
  
  let url;

  before(function(done) {
    chai.passport.use(strategy)
      .redirect(function(u) {
        url = u;
        done();
      })
      .req(function(req) {
        req.session = {};
      })
      .authenticate({ prompt: 'select_account', loginHint: 'jithin.kv2022@gmail.com', accessType: 'offline' });
  });

  it('should be redirected', function() {
    expect(url).to.equal('https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=select_account&login_hint=jithin.kv2022%40gmail.com&response_type=code&client_id=306698060316-o39h5dfbkc5da3e6s8q2ehg6rpftmgpq.apps.googleusercontent.com');
  });
}); // authorization request with documented parameters



describe('authorization request with Google Apps for Work parameters', function() {
  const strategy = new GoogleStrategy({
    clientID: "306698060316-o39h5dfbkc5da3e6s8q2ehg6rpftmgpq.apps.googleusercontent.com",
    clientSecret: "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",
  }, function() {});
  
  
  let url;

  before(function(done) {
    chai.passport.use(strategy)
      .redirect(function(u) {
        url = u;
        done();
      })
      .req(function(req) {
        req.session = {};
      })
      .authenticate({ hostedDomain: 'http://localhost:3000/google/callback' });
  });

  it('should be redirected', function() {
    expect(url).to.equal('https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=306698060316-o39h5dfbkc5da3e6s8q2ehg6rpftmgpq.apps.googleusercontent.com');
  });
}); // authorization request 

});