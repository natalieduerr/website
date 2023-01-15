import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Header from '../../components/navigation/Header';
import './home.scss';

import BuildWave from '../../components/wave/BuildWave';


export default class Home extends React.Component {
  render() {
    return (
      <main role='main'>
        <Header activeTab={'home'}></Header>
        <Grid container>
          <Container className={'home-content'}>
            <Grid item xs={12}>
              <h1 className='h6'>Hi, my name is</h1>
            </Grid>
            <Grid item xs={12}>
              <h2 className='h1'>Natalie Duerr</h2>
            </Grid>
            <BuildWave></BuildWave>
            <Grid item xs={12}>
              <h3 className='h2'>
                I’m a{' '}<Link to='/projects'>designer</Link>{' '}
                and <Link to='/writing'>writer</Link> located in New York, NY. I strive to create delightful and accessible experiences across platforms.
              </h3>
            </Grid>
          </Container>
        </Grid>
      </main>
    );
  }
}
