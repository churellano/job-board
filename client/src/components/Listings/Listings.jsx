import React, { Component } from 'react';
import JobPreview from './JobPreview';
import './Listings.css'

var date = new Date(2020, 4, 20, 11, 59);

var data1 = {
  position: 'Software Engineer intern',
  organization: 'Amazon',
  location: 'Vancouver, BC',
  semester: 'Summer 2020',
  duration: [4, 8],
  deadline: date
};

var data2 = {
  position: 'QA Analyst',
  organization: 'Microsoft',
  location: 'Vancouver, BC',
  semester: 'Summer 2020',
  duration: [8, 12],
  deadline: date
};

var data3= {
  position: 'Business Analyst intern',
  organization: 'Royal Bank of Canada',
  location: 'Toronto, ON',
  semester: 'Summer 2020',
  duration: [8, 12, 16],
  deadline: date
};

class Listings extends Component {
  render() {
    return (
      <div className="listings-container">
        <h1>jobs table here</h1>
        <JobPreview data={data1}/>
        <JobPreview data={data2}/>
        <JobPreview data={data3}/>
      </div>
    );
  }
}

export default Listings;
