"use strict";

const pool = require('../services/dbConnectService');

const getJobStatuses = (request, response) => {
  pool.connect().then(client => {
    client.query('SELECT * FROM JobStatus ORDER BY id ASC').then(result => {
      client.release();
      response.status(200).json(result.rows);
    })
    .catch(error => {
      client.release();
      console.log(error.stack);
    });
  });
}

const getJobStatusById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.connect().then(client => {
    client.query('SELECT * FROM JobStatus WHERE id = $1', [id]).then(result => {
      client.release();
      response.status(200).json(result.rows);
    })
    .catch(error => {
      client.release();
      console.log(error.stack);
    });
  });
}


module.exports = {
  getJobStatuses,
  getJobStatusById,
}