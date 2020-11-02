var express = require('express');
var router = express.Router();

const passport = require('passport');
const db = require('../queries/state-queries');

/* GET statuses listing. */
router.get('/', 
  passport.authenticate('jwt', { session: false }), (req, res) => {
    db.get(function(err, result) {
      if (err || !result) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
});

/* GET status by id */
router.get('/id/:id', 
  passport.authenticate('jwt', { session: false }), (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    db.getById(id, function(err, result) {
      if (err || !result) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
});

module.exports = router;
