var express = require('express');
var router = express.Router();

const passport = require('passport');
const userAccountsDb = require('../queries/user-accounts-queries');

/* GET UserAccounts listing. */
router.get('/', function(req, res) {
  console.log(req.params);
  userAccountsDb.get(function(err, result) {
    if (err || !result) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

/* GET UserAccount by id */
router.get('/id/:id', function(req, res) {
  console.log('params', req.id);
  const id = req.params.id;
  userAccountsDb.getUserAccountById(id, function(err, result) {
    if (err || !result) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

/* GET UserAccount by username */
router.get('/username/:username', function(req, res) {
  console.log('params', req.params.username);
  const username = req.params.username;
  userAccountsDb.getUserAccountByUsername(username, function(err, result) {
    if (err || !result) {
      console.log('err', err);
      res.status(400).send({ error: err.message });
    } else {
      res.status(200).send({ body: result });
    }
  });
});

module.exports = router;
