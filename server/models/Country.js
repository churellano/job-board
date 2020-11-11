const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');

const Country = db.define('Country', {
  Id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Iso3: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  // tableName: 'country',
  timestamps: false
});

module.exports = Country;