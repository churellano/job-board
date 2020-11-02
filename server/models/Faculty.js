const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Faculty = db.define('Faculty', {
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
  tableName: 'faculty',
  timestamps: false
});

module.exports = Faculty;