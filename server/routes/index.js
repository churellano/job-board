var express = require('express');
var router = express.Router();

const jobStatusesRouter = require('./job-statuses-routes');
const userAccountsRouter = require('./user-accounts-routes');
const loginRouter = require('./login');
const SHA256 = require("crypto-js/sha256");
const userAccountsDb = require('../queries/user-accounts-queries');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { user: req.user });
});

// Status routes
router.use('/JobStatuses', jobStatusesRouter);

// UserAccount routes
router.use('/UserAccounts', userAccountsRouter);

// UserAccount routes
// router.use('/login', loginRouter);
// const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const keys = require('../keys');
// const UserModel = require('../models/user');

// const router = express.Router();

router.post('/register', async (req, res) => {
  const { roleId, username, password, firstName, lastName, contactEmail, contactPhone } = req.body;
  // console.log(req.body);

  // authentication will take approximately 13 seconds
  // https://pthree.org/wp-content/uploads/2016/06/bcrypt.png
  const hashCost = 10;

  try {
    const passwordHash = await bcrypt.hash(SHA256(password).toString(), hashCost);
    const newUserAccount = {
      roleId: roleId,
      username: username,
      password: passwordHash,
      firstName: firstName,
      lastName: lastName,
      contactEmail: contactEmail,
      contactPhone: contactPhone
    };

    userAccountsDb.post(newUserAccount, function(err, result) {
      console.log('RESULT', result);
      res.status(200).send({ username });
    })
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error: 'req body should take the form { roleId, username, password, firstName, lastName, contactEmail, contactPhone }',
    });
  }
});

router.post('/login', (req, res) => {
  passport.authenticate(
    'local',
    { session: false },
    (error, user) => {


      if (error || !user) {
        console.log('error || !user', error);
        res.status(400).json({ error });
        return;
      }

      /** This is what ends up in our JWT */
      const payload = {
        username: user.username,
        expires: Date.now() + parseInt(process.env.JWT_EXPIRATION_MS),
      };

      /** assigns payload to req.user */
      req.login(payload, {session: false}, (error) => {

        if (error) {
          res.status(400).send({ error });
        }

        /** generate a signed json web token and return it in the response */
        const token = jwt.sign(JSON.stringify(payload), 'secret');

        /** assign our jwt to the cookie */
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.cookie('jwt', token, { httpOnly: true, sameSite: 'none',  secure: true, maxAge: 3600000 });
        res.status(200).send({ token, username: user.username });
      });
    },
  )(req, res);
});

router.get('/protected',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const { user } = req;
    console.log('protected');
    res.status(200).send({ user });
  }
);


// Profile routes
// router.get('/profile', require('connect-ensure-login').ensureLoggedIn(),
//           function(req, res){
//             console.log('\nget profile\n')
//             res.render('profile', { user: req.user });
//           });


module.exports = router;
