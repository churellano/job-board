const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Province = db.define('Province', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  abbreviation: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  tableName: 'province',
  timestamps: false
});

module.exports = Province;