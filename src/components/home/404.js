import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Header from '../../components/navigation/Header';

export default class Home extends React.Component {
  componentDidMount() {
    document.title = 'Oops - Natalie Duerr';
  }

  render() {
    return (
      <div>
        <Header></Header>
        <main role='main'>
          <Container style={{paddingTop: '4rem'}}>
            <Grid container justify={'center'} alignContent={'center'}>
              <Grid container justify={'center'} item xs={12} md={9} lg={8}>
                <h1>Hmm... this is not the page you are looking for</h1>
                <Link to={'/'}>
                  <Button className='primary' variant='contained' color='primary'>
                    Take Yourself Home
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}
