"use strict";

const pool = require('../services/dbConnectService');

const get = async (callback) => {
  let client;
  try {
    client = await pool.connect();
    const jobStatusesQuery = await client.query('SELECT * FROM JobStatus ORDER BY id ASC');
    // console.log('here2', jobStatusesQuery.rows);
    callback(null, jobStatusesQuery.rows);
  } catch (error) {
    console.log('here');
    callback(error, null);
  } finally {
    client.release();
  }
}

const getJobStatusById = async (id, callback) => {
  let client;
  try {
    client = await pool.connect();
    const jobStatusQuery = await client.query('SELECT * FROM JobStatus WHERE Id = $1', [id]);
    console.log('here', jobStatusQuery.rows);
    callback(null, jobStatusQuery.rows);
  } catch (error) {
    console.log('here2');
    callback(error, null);
  } finally {
    console.log('here3');
    client.release();
  }
}


module.exports = {
  get,
  getJobStatusById,
}