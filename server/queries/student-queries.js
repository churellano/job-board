"use strict";

const EmploymentStatus = require('../models/EmploymentStatus');
// const pool = require('../services/dbConnectService');
const db = require('../models/Student');
const UserAccount = require('../models/UserAccount');

const get = async (callback) => {
  try {
    const result = await db.findAll({ include: [EmploymentStatus, UserAccount] });
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

const getById = async (id, callback) => {
  try {
    const result = await db.findByPk(id, { include: [EmploymentStatus, UserAccount] });
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