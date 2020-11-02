"use strict";

const db = require('../models/Company');
const Province = require('../models/Province');
const State = require('../models/State');
const Country = require('../models/Country');

const get = async (callback) => {
  try {
    const result = await db.findAll({
      include: [
        Province,
        State,
        Country,
      ]
    });
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
        Province,
        State,
        Country,
      ]
    });
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

module.exports = {
  get,
  getById,
}