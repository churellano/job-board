var express = require('express');
var router = express.Router();

const jobStatusesDb = require('../queries/job-statuses-queries');

/* GET statuses listing. */
router.get('/', jobStatusesDb.getJobStatuses);

/* GET status by id */
router.get('/:id', jobStatusesDb.getJobStatusById);

module.exports = router;
