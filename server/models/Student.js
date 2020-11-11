const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
const UserAccount = require('../models/UserAccount');
const EmploymentStatus = require('./EmploymentStatus');

const Student = db.define('Student', {
  UserAccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserAccount,
      key: 'Id'
    },
    primaryKey: true
  },
  EmploymentStatusId: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
    references: {
      model: EmploymentStatus,
      key: 'Id'
    },
    primaryKey: true
  }
}, {
  freezeTableName: true,
  // tableName: 'student',
  timestamps: false
});

Student.belongsTo(UserAccount, { foreignKey: 'UserAccountId' });
Student.belongsTo(EmploymentStatus, { foreignKey: 'EmploymentStatusId' });

module.exports = Student;