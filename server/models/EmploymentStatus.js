const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const EmploymentStatus = db.define('EmploymentStatus', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  tableName: 'employmentstatus',
  timestamps: false
});

module.exports = EmploymentStatus;