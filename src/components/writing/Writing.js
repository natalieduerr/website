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
          <main className="all-projects" role='main'>
            <Container className='writing'>
              <h1>Projects</h1>
              <Grid container>
                <Grid item xs={12}>
                  <ProjectCard
                    name={'The art of acting and who benefits from “cripping up”?'}
                    type={'Essay'}
                    link={'https://natalieduerr.medium.com/the-art-of-acting-and-who-benefits-from-cripping-up-ff0079a71d97'}
                  />
                  <ProjectCard
                    name={'Celebrate Women’s History Month with films directed by and starring women'}
                    type={'Recommendations'}
                    link={'https://huntnewsnu.com/65899/lifestyle/celebrate-womens-history-month-with-films-directed-by-and-starring-women/'}
                  />
                  <ProjectCard
                    name={'Making sense of the senseless: Coel’s ‘I May Destroy You’ is this year’s biggest Golden Globe snub'}
                    type={'Review'}
                    link={'https://huntnewsnu.com/65281/lifestyle/review-making-sense-of-the-senseless-coels-i-may-destroy-you-is-this-years-biggest-golden-globe-snub/'}
                  />
                  <ProjectCard
                    name={'The Visitors — COVID-19 transforms an art exhibit into a healing experience'}
                    type={'Review'}
                    link={'film'}
                  />
                  <ProjectCard
                    name={'Filmify’s Brand Design'}
                    type={'Process'}
                    link={'https://medium.com/filmify/brand-design-filmify-cb294614a3bc'}
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
