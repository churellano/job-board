const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Role = db.define('Role', {
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
  tableName: 'role',
  timestamps: false
});

module.exports = Role;