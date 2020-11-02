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
  jobstatusid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: JobStatus,
      key: 'id'
    }
  },
  startsemesterid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Semester,
      key: 'id'
    }
  },
  startyear: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  maximumlength: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  deadline: {
    type: DataTypes.DATE,
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
      key: 'id'
    }
  },
  stateid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: State,
      key: 'id'
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
      key: 'id'
    }
  },
  targetfacultyid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Faculty,
      key: 'id'
    }
  },
  companyid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Company,
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  contactname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactsalutation: {
    type: DataTypes.STRING,
    allowNull: false
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
  tableName: 'job',
  timestamps: false
});

Job.belongsTo(JobStatus, { foreignKey: 'jobstatusid'});
Job.belongsTo(Semester, { foreignKey: 'startsemesterid'});
Job.belongsTo(Province, { foreignKey: 'provinceid'});
Job.belongsTo(State, { foreignKey: 'stateid'});
Job.belongsTo(Country, { foreignKey: 'countryid'});
Job.belongsTo(Faculty, { foreignKey: 'targetfacultyid'});
Job.belongsTo(Company, { foreignKey: 'companyid'});

module.exports = Job;