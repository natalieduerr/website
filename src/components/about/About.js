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
                <Grid className='extra-photos' container spacing={2} direction={'column'} item md={4}>
                  <Grid item className='image'>
                    <img
                      src={require('../../assets/imgs/about/cow2.jpg')}
                      alt='Natalie poses next to a cow with brown spots at a local farm.'
                    />
                    <div className='caption'>
                      <p>Wycoff, NJ</p>
                      <p>October 2022</p>
                    </div>
                  </Grid>
                  <Grid item className='image'>
                    <img
                      src={require('../../assets/imgs/about/cat.jpg')}
                      alt='Natalie takes a selfie with her calico cat sitting on her lap while she is working in her home office.'
                    />
                    <div className='caption'>
                      <p>Home</p>
                      <p>January 2022</p>
                    </div>
                  </Grid>
                </Grid>
                <Grid className='image' item xs={12} sm={6} md={3}>
                  <img
                    src={require('../../assets/imgs/about/hat.jpg')}
                    alt='Natalie poses with a bottle of lemonade while sitting on a blanket in a park. She is weating a blue floppy hat and pink dress.'
                  />
                  <div className='caption'>
                    <p>Brooklyn, NY</p>
                    <p>May 2023</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <p className='me'>
                    I first became interested in design while working on my high school's yearbook. With very few art
                    classes offered, I started as a self-taught designer. I finally found my design community at
                    Northeastern University, where I graduated with a BFA in Design (concentration in Interaction
                    Design). My goal is to create meaningful interactions and experiences accessible to all, in whatever
                    form that may take.
                  </p>
                  <p className='me'>
                    When I'm not designing, I write about film, television, and art for{' '}
                    <a href='https://readcopy.co/writings' rel='noopener noreferrer' target='_blank'>
                      COPY
                    </a>{' '}
                    (currently) and{' '}
                    <a
                      href='https://huntnewsnu.com/staff_name/natalie-duerr/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Huntington News
                    </a>{' '}
                    (previously). If I'm not at my computer, you can catch me rollerskating at a nearby rink,
                    watching (and sometimes rewatching) films at my local theatre, knitting with my cat, or sipping on a
                    matcha latte at a nearby cafe.
                  </p>
                  <a className='button' href={Resume} rel='noopener noreferrer' target='_blank'>
                    <Button className='primary' variant='contained' color='primary'>
                      View my résumé
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <Grid container justify='center'>
                <BuildWave></BuildWave>
              </Grid>
              <Grid container spacing={3} className='details'>
                <Grid item xs={12} md={4}>
                  <h2 className='h4'>Education</h2>
                  <h3 className='h5'>Northeastern University</h3>
                  <span className='role'>BFA in Design</span>
                  <span>Minors in Computer Science and Art History</span>
                  <span>Completed May 2021</span>
                  <p>
                    <strong>Relevant Courses:</strong> Interaction Design I & II, Programming Basics, Typography I & II,
                    Graphic Design I & II, Information Design, Physical Computing, Fundamentals of Computer Science I &
                    II, Database Design
                  </p>
                </Grid>
                <Grid item className='exp' xs={12} md={4}>
                  <h2 className='h4'>Experience</h2>
                  <ol>
                    <li>
                      <a href='https://www.drift.com/' rel='noopener noreferrer' target='_blank'>
                        <h3 className='h5'>Drift</h3>
                        <LaunchIcon />
                      </a>
                      <span className='role'>Product Designer</span>
                      <span className='time'>March 2022 – Present</span>
                      <span className='role'>Associate Product Designer</span>
                      <span className='time'>June 2021 – February 2022</span>
                      <span className='role'>Product Design co-op</span>
                      <span className='time'>July 2020 – December 2020</span>
                    </li>
                    <li>
                      <a href='https://www.bevspot.com/' rel='noopener noreferrer' target='_blank'>
                        <h3 className='h5'>BevSpot</h3>
                        <LaunchIcon />
                      </a>
                      <span className='role'>Junior Designer</span>
                      <span className='time'>July 2019 – April 2020</span>
                      <span>Boston, MA</span>
                    </li>
                    <li>
                      <a href='https://web.northeastern.edu/scout/' rel='noopener noreferrer' target='_blank'>
                        <h3 className='h5'>Scout Studio</h3>
                        <LaunchIcon />
                      </a>
                      <span className='role'> Designer + Front-end Developer</span>
                      <span className='time'>September 2017 – April 2019</span>
                      <span>Boston, MA</span>
                    </li>
                  </ol>
                </Grid>
                <Grid item xs={12} md={4}>
                  <h2 className='h4'>Skills</h2>
                  <ul>
                    <li>Figma</li>
                    <li>Adobe Creative Cloud</li>
                    <li>HTML + CSS</li>
                    <li>Sass/SCSS</li>
                    <li>React</li>
                    <li>Sketch + InVision</li>
                    <li>jQuery + Javascript</li>
                    <li>SQL</li>
                    <li>C++</li>
                    <li>Arduino</li>
                  </ul>
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
