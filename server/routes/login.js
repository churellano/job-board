var express = require('express');
var router = express.Router();

var passport = require('passport');
const userAccountsDb = require('../queries/user-accounts-queries');

router.get('/',
  function(req, res){
    res.render('login');
  });

router.post('/', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.render('home', { user: req.user });
  }
);

module.exports = router;
