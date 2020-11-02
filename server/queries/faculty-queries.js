"use strict";

// const pool = require('../services/dbConnectService');
const db = require('../models/Faculty');

const get = async (callback) => {
  try {
    const result = await db.findAll();
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

const getById = async (id, callback) => {
  try {
    const result = await db.findByPk(id);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}


module.exports = {
  get,
  getById,
}