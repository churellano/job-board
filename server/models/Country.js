const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Country = db.define('Country', {
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
  iso3: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: 'country',
  timestamps: false
});

module.exports = Country;