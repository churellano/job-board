const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
const Role = require('../models/Role');
const Student = require('./Student');
const Province = require('./Province');
const State = require('./State');
const Country = require('./Country');

const Company = db.define('Company', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  identifier: {
    type: DataTypes.UUIDV4,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  provinceid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Province,
      key: 'Id'
    }
  },
  stateid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: State,
      key: 'Id'
    }
  },
  region: {
    type: DataTypes.STRING,
    allowNull: true
  },
  countryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Country,
      key: 'Id'
    }
  },
  contactemail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactphone: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  freezeTableName: true,
  tableName: 'company',
  timestamps: false
});

Company.belongsTo(Province, { foreignKey: 'provinceid' })
Company.belongsTo(State, { foreignKey: 'stateid' })
Company.belongsTo(Country, { foreignKey: 'countryid' })

module.exports = Company;