"use strict";

// TODO: Store this somewhere more secure
const pg = require('pg');
const { Sequelize } = require('sequelize');


const DB_USER = 'postgres';
const DB_HOST = 'localhost';
const DB_NAME = 'JobBoard';
const DB_PASSWORD = 'temppwd';
const DB_PORT = 5432;

// const config = {
//   user: DB_USER,
//   host: DB_HOST,
//   database: DB_NAME,
//   password: DB_PASSWORD,
//   port: DB_PORT
// };

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres'
});

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// const connectionPool = new pg.Pool(config);

module.exports = db;
