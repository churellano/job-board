import React, { Component } from "react";
import JobDetail from '../JobDetail/JobDetail';
import { JOBS_API } from '../../constants';
import './Jobs.css';

export default class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      selectedJob: null
    };

    this.renderLocation = this.renderLocation.bind(this);
  }

  componentDidMount() {
    getData(JOBS_API).then(response => {
      console.log(response);
      this.setState(prevState => ({ jobs: response, selectedJob: response[0] }));
      console.log(this.state);
    });
  }

  renderLocation(job) {
    let location = job.City;
    if (job.Province != null) {
      location += ', ' + job.Province.Abbreviation;
    } else if (job.State != null) {
      location += ', ' + job.State.Abbreviation;
    } else if (job.Region != null) {
      location += ', ' + job.Region;
    }

    location += ', ' + job.Country.Name;

    return location;
  }

  setSelectedJob(job) {
    this.setState(prevState => ({ selectedJob: job }));
  }

  render() {
    let jobTableBody = this.state.jobs.map(job => {
      return (
        <tr key={job.Id}>
          <td>{job.JobStatus.Name}</td>
          <td>{job.Deadline}</td>
          <td>{job.Semester.Name + ' ' + job.StartYear} </td>
          <td>{job.Title}</td>
          <td>{job.Company.Name}</td>
          <td>{ this.renderLocation(job) }</td>
          <td>
            <button className="button is-link is-small" onClick={() => this.setSelectedJob(job)}>View</button>
            <button className="button is-small">Favourite</button>
          </td>
        </tr>
      );
    });

    let props = {
      selectedJob: this.state.selectedJob,
      renderLocation: this.renderLocation
    };

    return (
      <div className='jobs-container'>
        <div className='table-container'>
          <table className="table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Deadline</th>
                <th>Start term</th>
                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { jobTableBody }
            </tbody>
          </table>
        </div>
        
        { this.state.selectedJob ? <JobDetail {...props} /> : null }
      </div>
      
    );
  }
}

// Example GET method implementation:
async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}