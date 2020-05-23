import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';

import './about.scss';
import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import BuildWave from '../../components/wave/BuildWave';

import Resume from '../../assets/Duerr_Natalie_Resume.pdf';

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'About - Natalie Duerr';
  }

  render() {
    return (
      <div className={'page'}>
        <Grid container direction={'column'}>
          <Header activeTab={'about'}></Header>
          <main role='main'>
            <Container className='about'>
              <h1>About Me</h1>
              <Grid container direction={'row'} spacing={3} justify={'center'}>
                <Grid className='image' item xs={12} sm={6} md={4}>
                  <img src={require('../../assets/imgs/about/toronto.JPG')} alt='Natalie in Toronto.' />
                  <div className='caption'>
                    <p>Toronto, ON</p>
                    <p>September 2019</p>
                  </div>
                </Grid>
                <Grid className='extra-photos' container spacing={2} direction={'column'} item md={3}>
                  <Grid item className='image'>
                    <img
                      src={require('../../assets/imgs/about/seattle.jpeg')}
                      alt='Natalie at the Chihuly Museum in Seattle.'
                    />
                    <div className='caption'>
                      <p>Seattle, WA</p>
                      <p>March 2020</p>
                    </div>
                  </Grid>
                  <Grid item className='image'>
                    <img
                      src={require('../../assets/imgs/about/coolidge.jpg')}
                      alt='Natalie at a Q+A screening of Portrait of a Lady on fire at Coolidge Corner theatre in Boston.'
                    />
                    <div className='caption'>
                      <p>Brookline, MA</p>
                      <p>February 2020</p>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <p>
                    I first became interested in design while working on my high school's yearbook. With very few art
                    classes offered, I started out as a self-taught designer. I am now pursuing a BFA in Design, with a
                    concentration in Interaction Design, at Northeastern University, as well as minors in Computer
                    Science and Art History. My goal is to create meaningful interactions and experiences that are
                    accessible to all. When I'm not designing or developing, you can find me reading a good book{' '}
                    <s>in Boston Commons</s>, watching (and sometimes re-watching) films{' '}
                    <s>at the Coolidge or Brattle</s>, playing Animal Crossing, or hanging with friends (via the
                    internet right now!). Also, catch me always wearing my trusty Dr. Marten sneakers!
                  </p>
                  <a href={Resume} rel='noopener noreferrer' target='_blank'>
                    <Button className='primary' variant='contained' color='primary'>
                      View my Résumé
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <Grid container justify='center'>
                <BuildWave></BuildWave>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <h2 className='h4'>Education</h2>
                  <h3 className='h5'>Northeastern University</h3>
                  <span>
                    <strong>BFA in Design</strong>
                  </span>
                  <br />
                  <span>Minors in Computer Science and Art History</span>
                  <br />
                  <span>Expected 2021</span> <br /> <br />
                  <p>
                    <strong>Relevant Courses:</strong> Interaction Design I & II, Programming Basics, Typography I & II,
                    Graphic Design I & II, Information Design, Physical Computing, Fundamentals of Computer Science I &
                    II, Database Design
                  </p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <h2 className='h4'>Experience</h2>
                  <a href='https://www.bevspot.com/' rel='noopener noreferrer' target='_blank'>
                    <h3 className='h5'>BevSpot</h3>
                    <LaunchIcon />
                  </a>
                  <span>
                    <strong>Junior Designer</strong>
                  </span>
                  <br />
                  <span>July 2019 - April 2020</span>
                  <br />
                  <span>Boston, MA</span>
                  <br />
                  <br />
                  <a href='https://web.northeastern.edu/scout/' rel='noopener noreferrer' target='_blank'>
                    <h3 className='h5'>Scout Studio</h3>
                    <LaunchIcon />
                  </a>
                  <span>
                    <strong>Designer + Front-end Developer</strong>
                  </span>
                  <br />
                  <span>Sept 2017 - April 2019</span>
                  <br />
                  <span>Boston, MA</span>
                  <br />
                  <br />
                  <a href='https://www.oho.com/' rel='noopener noreferrer' target='_blank'>
                    <h3 className='h5'>OHO Interactive</h3>
                    <LaunchIcon />
                  </a>
                  <span>
                    <strong>Junior Designer</strong>
                  </span>
                  <br />
                  <span>July 2018 - December 2018</span>
                  <br />
                  <span>Somerville, MA</span>
                  <br />
                  <br />
                  <a href='https://www.tastemakersmag.com/' rel='noopener noreferrer' target='_blank'>
                    <h3 className='h5'>Tastemakers</h3>
                    <LaunchIcon />
                  </a>
                  <span>
                    <strong>Designer</strong>
                  </span>
                  <br />
                  <span>January 2017 - January 2019</span>
                  <br />
                  <span>Boston, MA</span>
                  <br />
                </Grid>
                <Grid item xs={12} md={4}>
                  <h2 className='h4'>Skills</h2>
                  <span>Sketch + InVision</span>
                  <br />
                  <span>Adobe Creative Suite</span>
                  <br />
                  <span>Figma</span>
                  <br />
                  <span>HTML + CSS</span>
                  <br />
                  <span>Sass/SCSS</span>
                  <br />
                  <span>React</span>
                  <br />
                  <span>jQuery</span>
                  <br />
                  <span>Javascript</span>
                  <br />
                  <span>SQL</span>
                  <br />
                  <span>Arduino</span>
                </Grid>
              </Grid>
            </Container>
          </main>
          <Footer></Footer>
        </Grid>
      </div>
    );
  }
}
