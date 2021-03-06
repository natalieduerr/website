import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';

export default class ProjectCard extends React.Component {
  state = {
    showImage: false,
  };

  render() {
    return (
      <Grid container>
        <Grid
          onFocus={() => {
            this.setState({ showImage: true });
          }}
          onMouseEnter={() => {
            this.setState({ showImage: true });
          }}
          onMouseLeave={() => {
            this.setState({ showImage: false });
          }}
          onBlur={() => {
            this.setState({ showImage: false });
          }}
          item
          xs={12}
          md={7}
          className={'project-card ' + this.props.link}
        >
          <Link to={'./projects/' + this.props.link}>
            <h2 className='h3'>{this.props.name}</h2>
            <h3 className='h6'>{this.props.type}</h3>
          </Link>
        </Grid>
        <Grid item md={5}>
          {this.state.showImage ? (
            <Box display={{ xs: 'none', md: 'unset' }} className={'preview-img-box ' + this.props.link}>
              <img
                className='preview-img'
                alt={this.props.name + ' preview'}
                src={require('../../assets/imgs/projects/' + this.props.img)}
              />
            </Box>
          ) : null}
        </Grid>
      </Grid>
    );
  }
}
