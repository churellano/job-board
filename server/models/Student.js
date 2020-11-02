const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
const UserAccount = require('../models/UserAccount');
const EmploymentStatus = require('./EmploymentStatus');

const Student = db.define('Student', {
  useraccountid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserAccount,
      key: 'id'
    },
    primaryKey: true
  },
  employmentstatusid: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
    references: {
      model: EmploymentStatus,
      key: 'id'
    },
    primaryKey: true
  }
}, {
  freezeTableName: true,
  tableName: 'student',
  timestamps: false
});

Student.belongsTo(UserAccount, { foreignKey: 'useraccountid' });
Student.belongsTo(EmploymentStatus, { foreignKey: 'employmentstatusid' });

module.exports = Student;