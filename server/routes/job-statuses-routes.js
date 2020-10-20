var express = require('express');
var router = express.Router();

const passport = require('passport');
const jobStatusesDb = require('../queries/job-statuses-queries');

/* GET statuses listing. */
router.get('/', 
  passport.authenticate('jwt', {session: false}), (req, res) => {
  const { user } = req;
  jobStatusesDb.getJobStatuses();

  res.status(200).send({ user });
});

/* GET status by id */
router.get('/:id', jobStatusesDb.getJobStatusById);

module.exports = router;
