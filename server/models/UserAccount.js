const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
const Role = require('../models/Role');

const UserAccount = db.define('UserAccount', {
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
  roleid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'id'
    }
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactemail: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  contactphone: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  freezeTableName: true,
  tableName: 'useraccount',
  timestamps: false
});

UserAccount.belongsTo(Role, { foreignKey: 'roleid' });

module.exports = UserAccount;