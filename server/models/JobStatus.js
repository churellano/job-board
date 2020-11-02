const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
// const Job = require('./Job');

const JobStatus = db.define('JobStatus', {
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
  tableName: 'jobstatus',
  timestamps: false
});

module.exports = JobStatus;