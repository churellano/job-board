var express = require('express');
var router = express.Router();

const jobStatusesRouter = require('./job-statuses-routes');
const userAccountsRouter = require('./user-accounts-routes');
const loginRouter = require('./login');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { user: req.user });
});

// Status routes
router.use('/JobStatuses', jobStatusesRouter);

// UserAccount routes
router.use('/UserAccounts', userAccountsRouter);

// UserAccount routes
router.use('/login', loginRouter);

// Profile routes
router.get('/profile', require('connect-ensure-login').ensureLoggedIn(),
          function(req, res){
            console.log('\nget profile\n')
            res.render('profile', { user: req.user });
          });


module.exports = router;
