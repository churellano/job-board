"use strict";

// TODO: Store this somewhere more secure
const pg = require('pg');
const DB_USER = 'postgres';
const DB_HOST = 'localhost';
const DB_NAME = 'JobBoard';
const DB_PASSWORD = 'temppwd';
const DB_PORT = 5432;

const config = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT
};

const connectionPool = new pg.Pool(config);

module.exports = connectionPool;
