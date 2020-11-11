const SHA256 = require("crypto-js/sha256");
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require('bcrypt');

// const { secret } = require('./keys');
const userAccountsDb = require('../queries/user-account-queries');

// const UserModel = require('./models/user');

module.exports = function(passport) {

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, async (username, password, done) => {
    userAccountsDb.getByUsername(username, async function(err, user) {
      if (err) { 
        return done(err); 
      }

      if (!user) { 
        return done('Username not found.', false, { message: 'Username not found.' });
      }

      const hashed = await bcrypt.hash(SHA256(password).toString(), 10);
      console.log('hashed: ', hashed);
      console.log('user: ', user);

      bcrypt.compare(SHA256(password).toString(), user.Password).then(response => {
        if (response !== true) {
          console.log('Password is invalid.');
          return done('Password is invalid.', false, { message: 'Password is invalid.' });
        }
        console.log('user found & authenticated');
        return done(null, user);
      });
    });
  }));

  passport.use(new JWTStrategy({
      jwtFromRequest: req => req.cookies.jwt,
      secretOrKey: 'secret',
    },
    (jwtPayload, done) => {
      console.log('jwtstrategy');
      console.log('payload', jwtPayload)

      if (jwtPayload.expires != null && Date.now() > jwtPayload.expires) {
        console.log('expired');
        return done('jwt expired');
      }

      return done(null, jwtPayload);
    }
  ));

}