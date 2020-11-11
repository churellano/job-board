const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Province = db.define('Province', {
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
  // tableName: 'province',
  timestamps: false
});

module.exports = Province;