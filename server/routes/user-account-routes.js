var express = require('express');
var router = express.Router();

const passport = require('passport');
const db = require('../queries/user-account-queries');

/* GET UserAccounts listing. */
router.get('/',
  passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log('jwt callback');
    db.get(function(err, result) {
      if (err || !result) {
        res.status(400).send(err);
      } else {
        // console.log(result);
        res.status(200).send(result);
      }
    });
});

/* GET UserAccount by id */
router.get('/id/:id',
  passport.authenticate('jwt', { session: false }), (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    db.getById(id, function(err, result) {
      if (err || !result) {
        res.status(400).send(err);
      } else {
        // console.log(result);
        res.status(200).send(result);
      }
    });
});

/* GET UserAccount by username */
router.get('/username/:username',
  passport.authenticate('jwt', { session: false }), (req, res) => {
    const username = req.params.username;
    console.log('username', username);
    db.getByUsername(username, function(err, result) {
      if (err || !result) {
        console.log('err', err);
        res.status(400).send({ error: err.message });
      } else {
        res.status(200).send({ body: result });
      }
    });
});

module.exports = router;
