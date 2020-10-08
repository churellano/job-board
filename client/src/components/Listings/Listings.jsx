import React, { Component } from 'react';
import JobPreview from './JobPreview';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import { Column } from 'react-bulma-components';
import './Listings.css';

var date = new Date(2020, 4, 20, 11, 59);

var data = [
  {
    position: 'Software Engineer intern',
    organization: 'Amazon',
    location: 'Vancouver, BC',
    semester: 'Summer 2020',
    duration: [4, 8],
    deadline: date
  },
  {
    position: 'QA Analyst',
    organization: 'Microsoft',
    location: 'Vancouver, BC',
    semester: 'Summer 2020',
    duration: [8, 12],
    deadline: date
  },
  {
    position: 'QA Analyst',
    organization: 'Microsoft',
    location: 'Vancouver, BC',
    semester: 'Summer 2020',
    duration: [8, 12],
    deadline: date
  }
];

class Listings extends Component {
  render() {
    return (
      <div class='columns'>
        <div class="column">
          First column
        </div>
        <div class="column">
          {data.map(jobData => <JobPreview data={jobData}></JobPreview>)}
        </div>
        <div class="column">
          Third column
        </div>
        <div class="column">
          Fourth column
        </div>
        <div class="column">
          Fifth column
        </div>
      </div>
    );
  }
}

export default Listings;
