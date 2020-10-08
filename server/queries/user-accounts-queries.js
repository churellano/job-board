"use strict";

const pool = require('../services/dbConnectService');

const getUserAccounts = (request, response) => {
  pool.connect().then(client => {
    client.query('SELECT * FROM UserAccount ORDER BY id ASC').then(result => {
      client.release();
      response.status(200).json(result.rows);
    })
    .catch(error => {
      client.release();
      console.log(error.stack);
    });
  });
}

const getUserAccountById = (id, callback) => {
  pool.connect().then(client => {
    client.query('SELECT * FROM UserAccount WHERE id = $1', [id]).then(result => {
      client.release();
      callback(null, result.rows[0]);
    })
    .catch(error => {
      client.release();
      console.log(error.stack);
    });
  });
}

const getUserAccountByUsername = (username, callback) => {
  console.log('getUserAccountByUserName PARAMS', username);

  pool.connect().then(client => {
    client.query('SELECT * FROM UserAccount WHERE Username = $1', [username]).then(result => {
      client.release();
      callback(null, result.rows[0]);
    })
    .catch(error => {
      client.release();
      console.log(error.stack);
    });
  });
}


module.exports = {
  getUserAccounts,
  getUserAccountById,
  getUserAccountByUsername
}