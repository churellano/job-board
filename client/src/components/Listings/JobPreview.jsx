import React, { Component } from 'react';
import './JobPreview.css';
import Card from '@material-ui/core/Card';

class JobPreview extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
    let daysLeft = Math.floor((this.props.data.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    let deadlineText = (daysLeft) => {
      if (daysLeft > 1) {
        return String(daysLeft + ' days left');
      } else if (daysLeft === 1) {
        return String(daysLeft + ' day left');
      } else if (daysLeft === 0) {
        return 'Deadline today';
      }
    }
    return (
      <Card variant='outlined'>
        <div className='job-preview'>
          <div className='job-summary'>
            <div className='job-info'>
              <h3>{this.props.data.position}</h3>
              <p>{this.props.data.organization}</p>
              <p>{this.props.data.location}</p>
              <p>{this.props.data.duration.join(', ')} months</p>
            </div>
            <div className='job-deadline'>
              <p>{deadlineText(daysLeft)}</p>
            </div>
          </div>
          <div className='job-action-list'>
            <button> Apply </button>
            <button> Favourite </button>
          </div>
        </div>
      </Card>
    );
  }
}

export default JobPreview;