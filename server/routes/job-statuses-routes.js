var express = require('express');
var router = express.Router();

const passport = require('passport');
const jobStatusesDb = require('../queries/job-statuses-queries');

/* GET statuses listing. */
router.get('/', 
  passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('jwt callback');
    const { user } = req;
    jobStatusesDb.get(function(err, result) {
      if (err || !result) {
        res.status(400).send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
});

/* GET status by id */
router.get('/:id', jobStatusesDb.getJobStatusById);

module.exports = router;
