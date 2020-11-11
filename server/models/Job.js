const { DataTypes } = require('sequelize');
const db = require('../services/dbConnectService');
const JobStatus = require('./JobStatus');
const Province = require('./Province');
const State = require('./State');
const Country = require('./Country');
const Semester = require('./Semester');
const Company = require('./Company');
const Faculty = require('./Faculty');

const Job = db.define('Job', {
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
  JobStatusId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: JobStatus,
      key: 'Id'
    }
  },
  StartSemesterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Semester,
      key: 'Id'
    }
  },
  StartYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  MaximumLength: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Deadline: {
    type: DataTypes.DATE,
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
  TargetFacultyId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Faculty,
      key: 'Id'
    }
  },
  CompanyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Company,
      key: 'Id'
    }
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ContactName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ContactSalutation: {
    type: DataTypes.STRING,
    allowNull: false
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
  // tableName: 'job',
  timestamps: false
});

Job.belongsTo(JobStatus, { foreignKey: 'JobStatusId'});
Job.belongsTo(Semester, { foreignKey: 'StartSemesterId'});
Job.belongsTo(Province, { foreignKey: 'ProvinceId'});
Job.belongsTo(State, { foreignKey: 'StateId'});
Job.belongsTo(Country, { foreignKey: 'CountryId'});
Job.belongsTo(Faculty, { foreignKey: 'TargetFacultyId'});
Job.belongsTo(Company, { foreignKey: 'CompanyId'});

module.exports = Job;