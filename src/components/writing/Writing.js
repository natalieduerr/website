import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import './projects.scss';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import ProjectCard from './ProjectCard';

export default class Writing extends React.Component {
  componentDidMount() {
    document.title = 'Writing - Natalie Duerr';
  }

  render() {
    return (
      <div className={'page'}>
        <Grid container direction={'column'}>
          <Header activeTab={'writing'} />
          <main className='all-projects' role='main'>
            <Container className='writing'>
              <h1>Writing samples</h1>
              <Grid container>
                <Grid item xs={12}>
                  <ProjectCard
                    name={'An Ode to Background Characters'}
                    type={'Essay'}
                    link={'https://readcopy.co/An-Ode-to-Background-Characters'}
                  />
                  <ProjectCard
                    name={'Of Hollywood and Men'}
                    type={'Review'}
                    link={'https://readcopy.co/Of-Hollywood-and-Men'}
                  />
                  <ProjectCard
                    name={'Filmify’s Brand Design'}
                    type={'Process'}
                    link={'https://medium.com/filmify/brand-design-filmify-cb294614a3bc'}
                  />
                  <ProjectCard
                    name={'The art of acting and who benefits from “cripping up”?'}
                    type={'Essay'}
                    link={
                      'https://natalieduerr.medium.com/the-art-of-acting-and-who-benefits-from-cripping-up-ff0079a71d97'
                    }
                  />
                  <ProjectCard
                    name={'Death in Our Hands'}
                    type={'Essay'}
                    link={'https://readcopy.co/Death-in-Our-Hands'}
                  />
                </Grid>
              </Grid>
            </Container>
          </main>
          <Footer />
        </Grid>
      </div>
    );
  }
}
