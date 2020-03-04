import React, { Component } from 'react';
import JobPreview from './JobPreview';
import './Listings.css'

var data1 = {
  position: 'Software Engineer intern',
  organization: 'Amazon',
  location: 'Vancouver, BC',
  semester: 'Summer 2020',
  duration: [4, 8],
  deadline: new Date()
}

class Listings extends Component {
  render() {
    return (
      <div className="listings-container">
        <h1>jobs table here</h1>
        <JobPreview data={data1}/>
      </div>
    );
  }
}

export default Listings;
