import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Header from '../../../components/navigation/Header';
import Footer from '../../../components/navigation/Footer';
import ProjectHeader from './ProjectHeader';
import ImageBlock from './ImageBlock';
import MoreProjects from './MoreProjects';


import './project.scss';

export default class Projects extends React.Component {
  componentDidMount() {
    document.title = "Online Resources - Natalie Duerr"
  }

  render() {
    return (
      <div className={'page'}>
        <Grid container direction={'column'}>
          <Header activeTab={''}></Header>
          <section className='project'>
            <Container>
              <Grid container justify={'center'}>
                <ProjectHeader title={'Online Resources'} category={['UX Design', 'Visual Design']} role={'Junior Designer at OHO Interactive'} date={'Aug 2018 - Nov 2018'} with={"Kelly O'Foran"}></ProjectHeader>              <Grid item xs={12} sm={10} md={8}>
                  <h4>About</h4>
                  <p>One of the first projects I was assigned at OHO Interactive was to create an Online Resource platform for a previous client. I was tasked with creating wireframes and designs for a listing page and individual resource pages. Through discussions with the client, we discovered there were three types of resources: article, video, and infographic. All of the work I produced was overseen by Kelly O’Foran, a Visual and UX Designer at OHO Interactive. This project has yet to launch.</p>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Wireframing</h4>
                  <p>Before I got started on creating wireframes, I looked at different blogs to look for UX patterns the users would be familiar with. </p>
                </Grid>
                <Grid item xs={12}>
                  <blockquote>The biggest challenge for this project was figuring out a way to display an infographic accessibly. </blockquote>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <p>The client was just uploading a PDF for people to read, however that doesn’t work for people who use screen readers or with Google’s SEO. Additionally, users had to zoom in on their screen to read the content, meaning this method wasn't working for any users. The best way to improve the user experience was to pull as much text out, while still using the imagery from the infographic. In wireframing, I developed two answers, one that would be the most time consuming, but provide the best results, and one that would be quicker to implement while still solving the problem, but not be as visually appealing. The client preferred the more time consuming approach, which resulted in an increased budget for the team.</p>
                </Grid>
              </Grid>
            </Container>
            <ImageBlock images={[
              { id: 1, img: require('../../../assets/imgs/projects/online-resources/1-1.png'), alt: 'A wireframe displaying the easier way to break apart the infographics. The user uploading the infographic would take screen shots and add captions and text as much as possible. This image specifically looks at one part of the infographic that showcases 3 steps. In the easier model, the graphic is simply captioned and alt-text is added.', size: 5 },
              { id: 2, img: require('../../../assets/imgs/projects/online-resources/1-2.png'), alt: 'This image showcases how the user could better separate out the infographic. The three steps from the infographic are broken out into a card each with the imagery from the original graphic.', size: 5 },
              { id: 3, img: require('../../../assets/imgs/projects/online-resources/1-3.png'), alt: 'This screen demonstrates the user filling out their information to pay for the tickets in cash. They have selected the location from a list, the date from a calendar, and the time from a dropdown.', size: 2 }
            ]} caption={"The images above showcase the same information, displayed in three different ways. The first is an example of how the infographic content could be easily uploaded, as an image with a caption and proper alt-text. The second image shows how the infographic could be split up even further, using a card component I created. In this way, a smaller image with the matching text and source information is pulled out. The last image showcases this card component on mobile, it becomes a slider that the user can move left/right to reveal the other cards."}></ImageBlock>
            <Container>
              <Grid container justify={'center'}>
                <Grid item xs={12} sm={10} md={8}>
                  <p>We were able to incorporate both solutions into the deliverable so the client could create new, exciting content and also quickly update their old infographic posts. I included a button to download the PDF as well, so users can still access the infographic in full if they wanted.</p>
                  <p>The other aspect of this project was the listing page. I wanted to give the client the ability to highlight a single resource, a way to display resources with or without an image, and a way for users to filter resources. The final wireframes for desktop and mobile for that listing can be seen below!</p>
                </Grid>
              </Grid></Container>
            <ImageBlock images={[
              { id: 0, size: 3 },
              { id: 1, img: require('../../../assets/imgs/projects/online-resources/2-1.png'), alt: 'A wireframe displaying the easier way to break apart the infographics. The user uploading the infographic would take screen shots and add captions and text as much as possible. This image specifically looks at one part of the infographic that showcases 3 steps. In the easier model, the graphic is simply captioned and alt-text is added.', size: 3 },
              { id: 2, size: 1 },
              { id: 3, img: require('../../../assets/imgs/projects/online-resources/2-2.png'), alt: 'This image showcases how the user could better separate out the infographic. The three steps from the infographic are broken out into a card each with the imagery from the original graphic.', size: 2 },
            ]} caption={"During the wireframe process, I was able to account for several of the client's concerns. I was able to showcase resources that didn't have an image, show the type of resource, and the associated programs. "}></ImageBlock>
            <Container>
              <Grid container justify={'center'}>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Applying the Brand</h4>
                  <p>Since the client recently had a website overhaul, now was not the time to get creative with their brand. I was able to incorporate styles that had already been established to make the Online Resources platform feel cohesive and reduce development time. Below are the final designs for listing and infographic pages.</p>
                </Grid>
              </Grid>
            </Container>
            <ImageBlock images={[
              { id: 0, size: 3 },
              { id: 1, img: require('../../../assets/imgs/projects/online-resources/3-1.png'), alt: 'This is the final listing screen design. The listing page has a header image and title and a filter selection below that. There is a main feature article and the recent resources displayed below. The resources use either an image or a description to higlight the content.', size: 3 },
              { id: 2, size: 1 },
              { id: 3, img: require('../../../assets/imgs/projects/online-resources/3-2.png'), alt: 'This image showcases the listing items on mobile. On the top is the featured resource and the recent postings below it.', size: 2 },
            ]} caption={"For the client, a resource article needed to not require an image. I was able to utilize the same text-styles used for image articles for text-based articles to create a cohesive listing page. I added text-based tags to reinforce the three different resource types and also let the user know what type of information they were about to encounter. All listings were designed to be visually accessible as well, with a black gradient helping to make the text more visible."}></ImageBlock>
            <Container>
              <Grid container justify={'center'}>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Reflection</h4>
                  <p>As one of my earlier projects at OHO Interactive, this was a huge learning experience. I learned about working on a cross-functional team of multiple project managers and developers. I got to speak and present to the client every week as well and learn about client communication. This was the first project where I was the UX and Design lead and it helped pave a successful path for the rest of my time at OHO Interactive. I got to know my co-workers better, gain confidence in my skills, and gain experience working with clients.</p>
                </Grid>
              </Grid>
            </Container>
          </section>
          <MoreProjects prev={'Drink Price Tool Landing Page'} prevLink={'DPT'} next={'Mass Hike'} nextLink={'mass-hike'}></MoreProjects>
          <Footer></Footer>
        </Grid >
      </div>
    );
  }
}