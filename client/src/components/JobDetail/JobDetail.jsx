import React, { Component } from "react";
// import { JOBS_API } from '../../constants';
import './JobDetail.css';
import moment from 'moment';

export default class JobDetail extends Component {
  render() {
    const location = this.props.renderLocation(this.props.selectedJob);

    return(
      <div className='box job-detail-container'>
        <h1 className='title'>{this.props.selectedJob.Title}</h1>
        <h2 className='subtitle'>{location}</h2>

        <div className='job-detail-deadline'>
          <h3>Deadline:</h3>
          <div>{moment(this.props.selectedJob.Deadline).format('MMMM D, Y')}</div>
        </div>
        
        <div>
          <h3>Description</h3>
          <div className="is-divider" data-content="OR"></div>
          <div>{this.props.selectedJob.Description}</div>
        </div>
        

        <div className='level job-detail-buttons'>
          <button className="button is-link is-small">Apply</button>
        </div>
      </div>
    );
  }
}