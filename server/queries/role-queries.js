"use strict";

// const pool = require('../services/dbConnectService');
const db = require('../models/Role');

const get = async (callback) => {
  console.log('getting jobs statuses');
  try {
    const result = await db.findAll();
    console.log('job statuses result', result);
    callback(null, result);
  } catch (error) {
    console.log('error', error);
    callback(error, null);
  }
}

const getById = async (id, callback) => {
  try {
    const result = await db.findByPk(id);
    console.log(result);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}


module.exports = {
  get,
  getById,
}