import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import Resume from '../../assets/Duerr_Natalie_Resume.pdf';

import './header.scss';

export default class Navigation extends React.Component {
  state = {
    menuOpened: false,
  };

  render() {
    return (
      <header>
        {this.props.activeTab === 'home' ? null : (
          <Box display={{ xs: 'none', md: 'block' }}>
            <Grid container>
              <Grid container item xs justify='flex-start'>
                <Grid item>
                  <Link to='/' className='name'>
                    <span>natalie duerr.</span>
                  </Link>
                </Grid>
              </Grid>
              <Grid container xs item justify='flex-end' spacing={3}>
                <Grid item>
                  <Link to='/projects' className={this.props.activeTab === 'projects' ? 'active' : null}>
                    Projects
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/about' className={this.props.activeTab === 'about' ? 'active' : null}>
                    About
                  </Link>
                </Grid>
                <Grid item>
                  <a href={Resume} rel='noopener noreferrer' target='_blank'>
                    Résumé
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}
        <Box display={{ md: 'none' }}>
          <Grid container>
            <Grid container justify='flex-end' className='header'>
              <Grid item>
                {!this.state.menuOpened ? (
                  <MenuIcon onClick={() => this.setState({ menuOpened: !this.state.menuOpened })} />
                ) : (
                  <CloseIcon onClick={() => this.setState({ menuOpened: !this.state.menuOpened })} />
                )}
              </Grid>
            </Grid>
            <Grid container align='center' direction='column' className={this.state.menuOpened ? 'menu open' : 'menu'}>
              <Grid item>
                <Link to='/' className={this.props.activeTab === 'home' ? 'active' : ''}>
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link to='/explore' className={this.props.activeTab === 'projects' ? 'active' : null}>
                  Projects
                </Link>
              </Grid>
              <Grid item>
                <Link to='/about' className={this.props.activeTab === 'about' ? 'active' : null}>
                  About
                </Link>
              </Grid>
              <Grid item>
                <a href={Resume} rel='noopener noreferrer' target='_blank'>
                  Résumé
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </header>
    );
  }
}
