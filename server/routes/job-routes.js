var express = require('express');
var router = express.Router();

const passport = require('passport');
const db = require('../queries/job-queries');

/* GET Jobs listing. */
router.get('/', 
  passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('jwt callback');
    const { user } = req;
    db.get(function(err, result) {
      if (err || !result) {
        res.status(400).send(err);
      } else {
        // console.log(result);
        res.status(200).send(result);
      }
    });
});

/* GET Job by id */
router.get('/id/:id', 
  passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('jwt callback');
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

module.exports = router;
