"use strict";

const Roles = {
  Administrator: 1,
  Student: 2,
  Employer: 3
}

const pool = require('../services/dbConnectService');

const get = async (callback) => {
  let client;
  try {
    client = await pool.connect();
    const userAccountsQuery = await client.query('SELECT * FROM UserAccount ORDER BY id ASC');
    // console.log('here2', userAccountsQuery.rows);
    callback(null, userAccountsQuery.rows);
  } catch (error) {
    console.log('here');
    callback(error, null);
  } finally {
    client.release();
  }
}

const getUserAccountById = async (id, callback) => {
  let client;
  try {
    client = await pool.connect();
    const userAccountQuery = await client.query('SELECT * FROM UserAccount WHERE Id = $1', [id]);
    console.log('here', userAccountQuery.rows);
    callback(null, userAccountQuery.rows);
  } catch (error) {
    console.log('here2');
    callback(error, null);
  } finally {
    console.log('here3');
    client.release();
  }
}

const getUserAccountByUsername = async (username, callback) => {
  console.log('getUserAccountByUserName PARAMS', username);

  let client;
  try {
    client = await pool.connect();
    const userAccountQuery = await client.query('SELECT * FROM UserAccount WHERE Username = $1', [username]);
    console.log('here', userAccountQuery.rows[0]);
    if (userAccountQuery.rows[0] == null) {
      throw new Error('User with the provided username was not found.');
    }
    console.log('success callback');
    callback(null, userAccountQuery.rows[0]);
  } catch (error) {
    console.log('here2', error);
    callback(error, null);
  } finally {
    console.log('here3');
    client.release();
  }
}

const post = async (newUserAccount, callback) => {
  console.log('post PARAMS', newUserAccount);
  const { roleId, username, password, firstName, lastName, contactEmail, contactPhone } = newUserAccount;
  
  let client;
  try {
    client = await pool.connect();
  } catch (error) {
    callback(error, null);
  }

  console.log(parseInt(roleId) === Roles.Student);
  if (parseInt(roleId) === Roles.Student) {
    console.log('Attempting to INSERT a new student UserAccount');

    try {
      // Create entry in UserAccount
      const insertUserAccount = await client.query(
        'INSERT INTO UserAccount (RoleId, Username, Password, FirstName, LastName, ContactEmail, ContactPhone) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [roleId, username, password, firstName, lastName, contactEmail, contactPhone]
      );
        
      // Create entry in Student with the Foreign key on UserAccountId
      await client.query(
        'INSERT INTO Student (UserAccountId, EmploymentStatusId) SELECT Id, 1 FROM UserAccount WHERE Username = ($1)', 
        [username]
      );

      console.log('release on success student');
      client.release();
      callback(null, insertUserAccount);

    } catch (error) {
      console.log('release on failure student');
      client.release();
      console.error(error.stack);
      callback(error, null);
    }
  } else if (parseInt(roleId) === Roles.Employer) {

    try {
      // Create entry in UserAccount
      const insertUserAccount = await client.query(
        'INSERT INTO UserAccount (RoleId, Username, Password, FirstName, LastName, ContactEmail, ContactPhone) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [roleId, username, password, firstName, lastName, contactEmail, contactPhone]
      );

      console.log('release on success employer/recruiter');
      client.release();
      callback(insertUserAccount);

    } catch (error) {
      console.log('release on failure employer/recruiter');
      client.release();
      console.error(error.stack);
      callback(error, null);
    }
    
  }
}

module.exports = {
  get,
  getUserAccountById,
  getUserAccountByUsername,
  post
}