const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const State = db.define('State', {
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
  tableName: 'state',
  timestamps: false
});

module.exports = State;