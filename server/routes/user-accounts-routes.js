var express = require('express');
var router = express.Router();

const userAccountsDb = require('../queries/user-accounts-queries');

/* GET UserAccounts listing. */
router.get('/', userAccountsDb.getUserAccounts);

/* GET UserAccount by id */
router.get('/:id', userAccountsDb.getUserAccountById);

/* GET UserAccount by username */
// router.get('/:id', userAccountsDb.getUserAccountsById);

module.exports = router;
