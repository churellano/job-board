import React, { Component } from 'react';
import './JobPreview.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from 'react-bulma-components';



class JobPreview extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
    let msPerDay = 1000 * 60 * 60 * 24;
    let daysLeft = Math.floor((this.props.data.deadline.getTime() - new Date().getTime()) / msPerDay);
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
      <Card className='job-preview'>
        <div className='card-content'>
          <p className='title is-size-6 has-text-left'> {this.props.data.position} </p>
          <p className='has-text-left'>{this.props.data.organization}</p>
          <p className='has-text-left'>{this.props.data.location}</p>
          <p className='has-text-left'>{this.props.data.duration.join(', ')} months</p>
          <p className='has-text-left'>{deadlineText(daysLeft)}</p>
        </div>
        <footer className='card-footer'>
          <a className='card-footer-item'> Apply </a>
          <a className='card-footer-item'> Favourite </a>
        </footer>
      </Card>
    );
  }
}

export default JobPreview;