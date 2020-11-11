const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
const Role = require('../models/Role');
const Student = require('./Student');
const Province = require('./Province');
const State = require('./State');
const Country = require('./Country');

const Company = db.define('Company', {
  Id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Identifier: {
    type: DataTypes.UUIDV4,
    allowNull: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  City: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ProvinceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Province,
      key: 'Id'
    }
  },
  StateId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: State,
      key: 'Id'
    }
  },
  Region: {
    type: DataTypes.STRING,
    allowNull: true
  },
  CountryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Country,
      key: 'Id'
    }
  },
  ContactEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ContactPhone: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  freezeTableName: true,
  // tableName: 'company',
  timestamps: false
});

Company.belongsTo(Province, { foreignKey: 'ProvinceId' })
Company.belongsTo(State, { foreignKey: 'StateId' })
Company.belongsTo(Country, { foreignKey: 'CountryId' })

module.exports = Company;