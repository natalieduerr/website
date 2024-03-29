import React from 'react';
import Grid from '@material-ui/core/Grid';
import LaunchIcon from '@material-ui/icons/Launch';

export default class ProjectCard extends React.Component {
  state = {
    showImage: false,
  };

  render() {
    return (
      <Grid container className='project-card'>
        <h2 className='h6'>{this.props.type}</h2>
        <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
          <h3 className='h3'>{this.props.name}<LaunchIcon /></h3>
        </a>
      </Grid>
    );
  }
}
