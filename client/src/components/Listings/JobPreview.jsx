import React, { Component } from 'react';
import './JobPreview.css';

class JobPreview extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
    console.log(this.props.data.deadline);
    return (
      <div className='job-preview'>
        <div className='summary'>
          <h3>{this.props.data.position}</h3>
          <p>{this.props.data.organization}</p>
          <p>{this.props.data.location}</p>
          <p>{this.props.data.duration.join(', ')} months</p>
        </div>
        <div className='deadline'>
          <p>{this.props.data.deadline.toDateString()}</p>
        </div>
        <div className='action-list'>

        </div>
      </div>
    );
  }
}

export default JobPreview;
