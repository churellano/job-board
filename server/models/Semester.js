const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Semester = db.define('Semester', {
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
  // tableName: 'semester',
  timestamps: false
});

module.exports = Semester;