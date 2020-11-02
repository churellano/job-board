import React, { Component } from "react";
import { JOBS_API } from '../../constants';

export default class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    getData(JOBS_API).then(response => {
      console.log(response);
      this.setState(prevState => ({ jobs: response }));
      console.log(this.state);
    });
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
          </tr>
        </thead>
        {this.state.jobs.map(job => <tr key={job.id}> <td>{job.title}</td> <td>{job.companyid}</td> </tr>)}
      </table>
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