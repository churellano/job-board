import React, { Component } from 'react';
import './JobPreview.css';

class JobPreview extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
    return (
      <div className="job-preview">
        <h2>job preview</h2>
        <h3>{this.props.data.position}</h3>
        <p>{this.props.data.organization}</p>
        <p>{this.props.data.location}</p>
        <p>{this.props.data.duration.join(',')} months</p>
      </div>
    );
  }
}

export default JobPreview;
