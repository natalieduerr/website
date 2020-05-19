import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Header from '../../../components/navigation/Header';
import Footer from '../../../components/navigation/Footer';
import ProjectHeader from './ProjectHeader';
import ImageBlock from './ImageBlock';
import MoreProjects from './MoreProjects';

import Poster from "../../../assets/imgs/projects/film/Duerr_Natalie_Film.pdf";

import './project.scss';

export default class Film extends React.Component {
  componentDidMount() {
    document.title = "A Year in Film - Natalie Duerr"
  }

  render() {
    return (
      <div className={'page'}>
        <Grid container direction={'column'}>
          <Header activeTab={''}></Header>
          <section className='project'>
            <Container>
              <Grid container justify={'center'}>
                <ProjectHeader title={'A Year in Film'} category={['Typography', 'Info Design']} role={null} date={'March - April 2020'} with={null}></ProjectHeader>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>About</h4>
                  <p>For our final Info Design project, we were tasked with creating a Data Selfie, an experience that captured data specific to us. As a film-lover and Letterboxd user, I decided to utilize a year's worth of data from the app. Letterboxd collects entries of watched films that include the title, date watched, my rating, and my review. I was able to leverage this information to understand the diversity of the filmmakers I watch.</p>
                  <a href={Poster} rel="noopener noreferrer" target="_blank">
                    <Button className="primary" variant="contained" color="primary">View Full PDF</Button>
                  </a>
                  <br/><br/>
                  <p>I am also in the process of turning this poster into a digital experience, I will share a link when that project goes live.</p>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Concept</h4>
                  <p>As someone who advocates for greater inclusion in the film industry I was interested to see who makes the films I watch and enjoy the most. My first project highlighted the lack of diversity of the directors who have won Best Picture at the Oscar's (hint: it's been a white man 86 times out of 92 years), so it was a great way to tie together the concept of what critics and Hollywood deem to be the best versus what a consumer spends times and money to watch.</p>
                  <p>Initially, my project started as more of a visualization of where I watched films and who was in them. Though still interesting, I needed a focus to pull the poster together. From critical feedback and reflection, I decided to look at the diversity of films I was watching, specifically racial and gender diversity as that related to my first project. Below are two iterations of this poster and the final one.</p>
                </Grid>
              </Grid>
            </Container>
            <ImageBlock images={[
              { id: 1, img: require('../../../assets/imgs/projects/film/1-1.png'), alt: "My first iteration. This poster focuses on the location where I have watched films, mainly across North America. There are states on how many films I have watched and the ratings I gave the film. In the bottom right corner are my most watched films, directors, and actors. Along the border are dots to represent days where I watched a film" },
              { id: 2, img: require('../../../assets/imgs/projects/film/1-2.png'), alt: "My second iteration. This poster has a central focus of a bar chart depicting the ratings I gave films I watched and the pie chart of the racial and gender identities of the director's of the films I watched. The border of the poster has dots to represent when a film was watched. The title of the film is next to the dot. There are boxes with reviews for some of films throughout the poster as well. " },
              { id: 3, img: require('../../../assets/imgs/projects/film/1-3.png'), alt: "My final iteration. This poster is very similar to the second iteration but it is more refined. The typography has a clear hierarchy and there is a more clear path to understand the poster." }
            ]} caption={"These are three iterations of my concept. At first I placed the focus on geography, but found that that data didn't lead to any conclusions. Once I shifted to teh diversity of directors, I was able to draw a meaningful conclusions that my viewing habits are relaively diverse, but that I could always do better."}></ImageBlock>
            <Container>
              <Grid container justify={'center'}>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Reflection</h4>
                  <p>This project involved showing a lot of data and analysis while trying to not overwhelm the viewer. It was a great exercise in applying focus and zoning in on one aspect to make a more powerful statement. Personally I was able to see that while I do watch lots of films by women, I should find and support more directors of color.</p>
                  <p>As I mentioned earlier, I am currently developing this project further and translating this information into an interactive, digital experience. </p>
                </Grid>
              </Grid>
            </Container>
          </section>
          <MoreProjects prev={'Ordering on BevSpot'} prevLink={'bevspot'} next={'Drink Price Tool Landing Page'} nextLink={'dpt'}></MoreProjects>
          <Footer></Footer>
        </Grid>
      </div>
    );
  }
}