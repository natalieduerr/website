import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Header from '../../../components/navigation/Header';
import Footer from '../../../components/navigation/Footer';
import ProjectHeader from './ProjectHeader';
import MoreProjects from './MoreProjects';

import './project.scss';

export default class DPT extends React.Component {
  componentDidMount() {
    document.title = 'Drink Price Tool - Natalie Duerr';
  }

  render() {
    return (
      <div className={'page'}>
        <Grid container direction={'column'}>
          <Header activeTab={''}></Header>
          <main role='main'>
            <section className='project'>
              <Container>
                <Grid container justify={'center'}>
                  <ProjectHeader
                    title={'Drink Price Tool Landing Page'}
                    desc={'Promoting a new tool to exisiting and future customers'}
                    category={['Web Design', 'Development']}
                    role={'Junior Designer at BevSpot'}
                    date={'July 2019 - Aug 2019'}
                    with={'Stephanie MacLeod'}
                  ></ProjectHeader>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>About</h3>
                    <p>
                      In August 2019, BevSpot was releasing a new and improved Drink Price Tool. To promote this release
                      I was tasked with designing and developing a new landing page. The landing page was expected to
                      bring in a lot of traffic from new and current users so it needed to be informative and encourage
                      new visitors to sign up for a free trial with BevSpot.
                    </p>
                    <a className='button' href={'https://app.bevspot.com/drink_price_tool/'} rel='noopener noreferrer' target='_blank'>
                      <Button className='primary' variant='contained' color='primary'>
                        View the Live Page
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Design Concepts</h3>
                    <p>
                      Working with the Design Director, Stephanie MacLeod, we settled on a "tropical drink" theme. With
                      the release being in August and the umbrella offering a unique opportunity for a pie chart, this
                      theme was perfect. Stephanie provided the illustrations for the drink and tropical leaves and from
                      there I got to run with it!
                    </p>
                    <p>
                      Following the design trends of summer 2019, I incorporated wavy lines and colorful section
                      dividers to our landing page. Not only did these design concepts fit with the theme, but they were
                      incredibly popular and recognizable by the general public.
                    </p>
                    <p>
                      To not overwhelm the viewer, the page was divided into several distinct sections with clear
                      actions. Certain sections featured interactive elements that could provide the user with more
                      information on click. The main call to action to 'Sign Up for BevSpot' followed the user as they
                      scrolled as well. This meant that once they decided to give our product a try, they wouldn't have
                      to look hard for the next step.
                    </p>
                    <p>
                      I wanted to make sure that this page wasn't a dead end. I included links at the bottom of the page
                      that guide the viewer to other resources from BevSpot that they may be interested in. Below is the
                      finalized design mocks that I used to develop the page.
                    </p>
                  </Grid>
                </Grid>
                <Grid container justify={'center'}>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Development</h3>
                    <p>This landing page was developed in HTML, SCSS, and jQuery and is completely responsive.</p>
                    <a href={'https://app.bevspot.com/drink_price_tool/'}>
                      <Button className='primary' variant='contained' color='primary'>
                        View the Live Page
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Reflection</h3>
                    <p>
                      This was my first project at BevSpot and was also a project that was completely mine. My team's
                      support helped make this challenge a great learning experience for me. I was able to design a
                      landing page and then immediately translate those designs to an interactive web page
                    </p>
                    <p>
                      I did not have access to any metrics related to this page, but to consider this project successful
                      I would have liked to see
                    </p>
                    <ol>
                      <li>An increase in free trial sign-ups from this page</li>
                      <li>An increase in traffic on /drink_price_tool</li>
                    </ol>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <MoreProjects
              prev={'A Year in Film'}
              prevLink={'film'}
              next={'Online Resources'}
              nextLink={'online-resources'}
            ></MoreProjects>
          </main>
          <Footer></Footer>
        </Grid>
      </div>
    );
  }
}
