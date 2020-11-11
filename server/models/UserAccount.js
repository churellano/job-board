const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
const Role = require('../models/Role');

const UserAccount = db.define('UserAccount', {
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
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'Id'
    }
  },
  Username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  Password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ContactEmail: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  ContactPhone: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  freezeTableName: true,
  // tableName: 'useraccount',
  timestamps: false
});

UserAccount.belongsTo(Role, { foreignKey: 'RoleId' });

module.exports = UserAccount;