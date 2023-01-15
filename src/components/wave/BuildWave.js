import React from 'react';

import Grid from '@material-ui/core/Grid';

import './wave.scss';

export default class BuildWave extends React.Component {
  componentDidMount() {
    this.buildWave(400, 60);
  }

  buildWave(w, h) {
    var m = 0.512286623256592433;

    var wave = document.querySelector('#wave');

    var pathData = [
      'M',
      0,
      h * 0.625,
      'c',
      0.25 * h * m,
      0,
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
      's',
      0.25 * h * (1 - m),
      0.25 * h,
      0.25 * h,
      0.25 * h,
      's',
      0.25 * h * (1 - m),
      -0.25 * h,
      0.25 * h,
      -0.25 * h,
    ].join(' ');

    wave.setAttribute('d', pathData);
  }

  render() {
    return (
      <Grid item className='wave-container'>
        <svg width='400px' height='60px' viewBox='5 0 80 60'>
          <path id='wave' fill='none' strokeWidth='4' strokeLinecap='round'></path>
        </svg>
      </Grid>
    );
  }
}
