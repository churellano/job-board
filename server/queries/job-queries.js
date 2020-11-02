"use strict";

// const pool = require('../services/dbConnectService');
const db = require('../models/Job');
const JobStatus = require('../models/JobStatus');
const Province = require('../models/Province');
const State = require('../models/State');
const Country = require('../models/Country');
const Semester = require('../models/Semester');
const Company = require('../models/Company');
const Faculty = require('../models/Faculty');

const get = async (callback) => {
  console.log('getting jobs');
  try {
    const result = await db.findAll({
      include: [
        JobStatus,
        Province,
        State,
        Country,
        Semester,
        Company,
        Faculty
      ]
    });
    // console.log('jobs result', result);
    callback(null, result);
  } catch (error) {
    console.log('error', error);
    callback(error, null);
  }
}

const getById = async (id, callback) => {
  try {
    const result = await db.findByPk(id, {
      include: [
        JobStatus,
        Province,
        State,
        Country,
        Semester,
        Company,
        Faculty
      ]
    });
    // console.log(result);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

module.exports = {
  get,
  getById,
}