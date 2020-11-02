const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Semester = db.define('Semester', {
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
  tableName: 'semester',
  timestamps: false
});

module.exports = Semester;