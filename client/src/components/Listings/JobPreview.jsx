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
      // <Card variant='outlined'>
      //   <div className='job-preview'>
      //     <div className='job-summary'>
      //       <div className='job-info'>
      //         <h3>{this.props.data.position}</h3>
      //         <p>{this.props.data.organization}</p>
      //         <p>{this.props.data.location}</p>
      //         <p>{this.props.data.duration.join(', ')} months</p>
      //       </div>
      //       <div className='job-deadline'>
      //         <p>{deadlineText(daysLeft)}</p>
      //       </div>
      //     </div>
      //     <div className='job-action-list'>
      //       <Button> Apply </Button>
      //       <Button> Favourite </Button>
      //     </div>
      //   </div>
      // </Card>
      <Card>
        <div className='card-content'>
          <p className='title is-size-6 has-text-left'> {this.props.data.position} </p>
          <p className='has-text-left'>{this.props.data.organization}</p>
          <p className='has-text-left'>{this.props.data.location}</p>
          <p className='has-text-left'>{this.props.data.duration.join(', ')} months</p>
          <p>{deadlineText(daysLeft)}</p>
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