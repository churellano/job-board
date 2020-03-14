import React, { Component } from 'react';
import './JobPreview.css';

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    display: 'block',
    width: '30vw',
    margin: '8vh',
    padding: '8vh',
  }
};

class JobPreview extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
    const classes = makeStyles(styles);

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
      <Card className={classes.root} variant='outlined'>
        <div className='job-preview'>
          <CardContent className='job-summary'>
            <div className='job-info'>
              <Typography variant="h6">{this.props.data.position}</Typography>
              <Typography variant="body2">{this.props.data.organization}</Typography>
              <Typography variant="body2">{this.props.data.location}</Typography>
              <Typography variant="body2">{this.props.data.duration.join(', ')} months</Typography>
            </div>
            <div className='job-deadline'>
              <Typography variant="body2">{deadlineText(daysLeft)}</Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small"> Apply </Button>
            <Button size="small"> Favourite </Button>
          </CardActions>
        </div>
      </Card>
    );
  }
}

export default JobPreview;