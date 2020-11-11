const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const State = db.define('State', {
  Id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Abbreviation: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  // tableName: 'state',
  timestamps: false
});

module.exports = State;