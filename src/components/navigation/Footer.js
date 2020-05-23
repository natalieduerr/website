import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.scss';

export default class Navigation extends React.Component {
  state = {
    menuOpened: false,
  };

  render() {
    return (
      <footer>
        <Container>
          <Grid container justify={'space-between'} alignContent={'center'}>
            <Grid item xs={12} md container spacing={3}>
              <Grid item>
                <p>{'Created with <3 by Natalie Duerr, 2020'}</p>
              </Grid>
            </Grid>
            <Grid item className={'social'} xs={12} md container spacing={3} direction={'row'}>
              <Grid item>
                <Link className={'with-icon'} to='https://twitter.com/natalieduerr98'>
                  <TwitterIcon />
                  <span> Find me on Twitter</span>
                </Link>
              </Grid>
              <Grid item>
                <Link className={'with-icon'} to='https://www.linkedin.com/in/natalieduerr/'>
                  <LinkedInIcon />
                  <span> Connect on LinkedIn</span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    );
  }
}
