const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Faculty = db.define('Faculty', {
  Id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  // tableName: 'faculty',
  timestamps: false
});

module.exports = Faculty;