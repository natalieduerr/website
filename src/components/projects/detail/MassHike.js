import React from 'react';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Header from '../../../components/navigation/Header';
import Footer from '../../../components/navigation/Footer';
import ProjectHeader from './ProjectHeader';
import ImageBlock from './ImageBlock';
import MoreProjects from './MoreProjects';


import './project.scss';

export default class Projects extends React.Component {
  componentDidMount() {
    document.title = "Mass Hike - Natalie Duerr"
  }

  render() {
    return (
      <Grid container direction={'column'}>
        <Header activeTab={''}></Header>
        <section className='project'>
          <Container>
            <Grid container justify={'center'}>
              <ProjectHeader title={'Mass Hike'} category={['Research', 'UX Design', 'Visual Design']} role={'Designer at Scout Studio'} date={'Jan 2018 - May 2018'} with={'Camden Phalen, McKenna Shuster, Matthe Panzer, Vinny Carlino'}></ProjectHeader>
              <Grid item xs={12} sm={10} md={8}>
                <h4>About</h4>
                <p>During my second semester with Scout, I worked with Mass Hike, a non-profit focused on making nature more accessible for Bostonians. Mass Hike runs trips where they provide transportation to and from local reservations and parks, and from there customers are free to roam as they please or go on a hike with a Mass Hike team member. Mass Hike targets two main, but very distinct groups: young professionals and low-income communities, who for very distinct reasons, have a difficult time making it out of the city. Mass Hike needed a brand that matched their unique mission, a marketing website that captured the fun of nature, and a ticket-purchasing system that was simple and easy to use.</p>
                <Link to={'https://masshike.org/'}>
                  <Button className="primary" variant="contained" color="primary">View Live Site</Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                <h4>Discovery</h4>
                <p>Before we could dive into wireframes and designs, we first needed to understand who their users were. Our team created a survey which was shared with Mass Hike’s email list. This survey confirmed what the Mass Hike team shared with us, many of their customers were working professionals who lacked transportation to nature and members of low-income communities who, due to financial constraints, struggle to make it out into nature. As a team of college students, we felt that we had a grasp of the user needs and goals of young professionals, so we decided to focus the rest of our research on lower income community members.</p>

                <p>Mass Hike was able to share several contacts with us, one of which helped organize events in low-income housing developments and loved Mass Hike’s goal. I was able to set up a phone call and talk to her about how we could best design for the low-income community. The most important questions were…</p>
                <ul>
                  <li>What type of technology do you see members of your community using? How often do they use different forms of technology?</li>
                  <li>What is the best way to contact members of your community?</li>
                  <li>How do members of your community prefer to pay for things online? How common is it to not have a credit card or bank account?</li>
                </ul>
                <p>Through this interview, I was able to gather valuable insight. We learned that a lot of people are using public computers to access the internet and many use non-smart phones on a day to day basis. This showed us that we really needed to focus on the desktop experience, as opposed to mobile, as one of the main target audience was primarily using computers. I also discovered that people prefer paying in cash if possible and that there are many community members who do not have a bank account or credit card.</p>
              </Grid>
              <Grid item xs={12}>
                <blockquote>This information led to a large UX problem, how can we allow for customers to pay in cash on an online booking platform?</blockquote>
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                <h4>Wireframing</h4>
                <p>Mass Hike was my first expedition into wireframing and it was a huge learning experience. I had never even opened Sketch and now I was tasked with wireframing a whole booking platform and marketing website.</p>
                <p>Our first goal was to figure out the booking platform, the most critical part of the project. Through the help of my project lead and Scout’s Design Director, I was able to get a basic grasp on Sketch.</p>
                <p>After hours and hours of wireframing, researching, and discussing, I was able to come up with a design solution to our biggest concern, paying with cash online. I designed a calendar system that allowed Mass Hike to add days and times they were free and then a user who wanted to pay in cash could book that time and pick the nearest Boston Centers for Youth & Families to meet. This allowed users to pay in cash and for Mass Hike to guarantee those seats were sold. </p>
                <p>On top of allowing users pay in cash, we updated the ticket purchasing process to allow for promo codes and pay-what-you-want tickets. Mass Hike offers $2.00 tickets to low-income families, with our new system, Mass Hike could create a promo code and share it with the families that qualified. This allowed them to purchase tickets online as opposed to in person or on the day of while still getting the benefit of paying the lower price.</p>
                <p>In addition, the pay-what-you-want tickets allow users who may be able to spend extra to enter their own ticket price with the knowledge that they were helping subsidizing the cost of tickets for low-income families.</p>
                <p>These changes made the booking platform perfect for Mass Hike’s consumer base.</p>
              </Grid>
            </Grid>
          </Container>
          <ImageBlock images={[
            { id: 1, img: require('../../../assets/imgs/projects/mass-hike/1-1.png'), alt: 'A wireframe showing how the user would input how many tickets they wanted and where they would like to be picked up.' },
            { id: 2, img: require('../../../assets/imgs/projects/mass-hike/1-2.png'), alt: 'Another wireframe later in the ticket purchasing process. This screen asks if the users has a promo code (they do) and how much they want to pay for a ticket. The options are $2, $5, $8 or other amount. The user has entered $4 as the amount they would like to pay.' },
            { id: 3, img: require('../../../assets/imgs/projects/mass-hike/1-3.png'), alt: 'This screen demonstrates the user filling out their information to pay for the tickets in cash. They have selected the location from a list, the date from a calendar, and the time from a dropdown.' }
          ]} caption={"These three screens demonstrate the unique aspects of our booking platform. Mass Hike makes three or four stops before travelling to their destination. They need to collect people's pick-up address in order to determine the most convenient locations for everyone. The second screen shows the user inputting a promo code and receiving cheaper tickets. It also shows the way users choose to pay for the price of their ticket. The final screen showcases the pay by cash set-up. "} link={"https://invis.io/B3P14DU5XYR"} linkText={'View all of the booking platform wireframes on InVision.'}></ImageBlock>
          <Container>
            <Grid container justify={'center'}>
              <Grid item xs={12} sm={10} md={8}>
                <h4>High Fidelity Screens</h4>
                <p>With the booking platform wires complete, wireframing the marketing website was a lot easier. After all the wires were created and approved by the client, it was time to apply the brand (designed by McKenna) to the screens. This was my first time creating a user interface so there was a lot to learn. Below are examples of the first screens I designed, and then their final counterpart.</p>
              </Grid>
            </Grid>
          </Container>
          <ImageBlock images={[
            { id: 1, img: require('../../../assets/imgs/projects/mass-hike/2-1.png'), alt: 'A wireframe showing how the user would input how many tickets they wanted and where they would like to be picked up.' },
            { id: 2, img: require('../../../assets/imgs/projects/mass-hike/2-2.png'), alt: 'Another wireframe later in the ticket purchasing process. This screen asks if the users has a promo code (they do) and how much they want to pay for a ticket. The options are $2, $5, $8 or other amount. The user has entered $4 as the amount they would like to pay.' },
            { id: 3, img: require('../../../assets/imgs/projects/mass-hike/2-3.png'), alt: 'This screen demonstrates the user filling out their information to pay for the tickets in cash. They have selected the location from a list, the date from a calendar, and the time from a dropdown.' },
            { id: 3, img: require('../../../assets/imgs/projects/mass-hike/2-4.png'), alt: 'This screen demonstrates the user filling out their information to pay for the tickets in cash. They have selected the location from a list, the date from a calendar, and the time from a dropdown.' }
          ]} caption={"These two screens showcase how much I learned during this time. At first, I had trouble pushing the designs and they looked too much like the wireframes. By the end, I learned that wireframes are just a general guide and it's usually better to just reference them and not restyle them! "} link={"https://invis.io/5UP7B56J6X7"} linkText={'View all of the booking platform high fidelity screens on InVision.'}></ImageBlock>
          <Container>
            <Grid container justify={'center'}>
              <Grid item xs={12} sm={10} md={8}>
                <h4>Reflection</h4>
                <p>Mass Hike was one of the most valuable projects I have ever worked on. I learned SO much in those four months and I was able to jump in to this incredible project. Looking back, I wish my team and I were more cognizant about accessibility, and that is definitely the one thing I would change about this project. As I grow as a designer, accessibility has become more and more important to me. I can’t go back in time and tweak colors and font styles, but I can use this experience to learn how to do better!</p>
              </Grid>
            </Grid>
          </Container>
        </section>
        <MoreProjects prev={'Online Resources'} prevLink={'online-resources'} next={'Contuity'} nextLink={'contuity'}></MoreProjects>
        <Footer></Footer>
      </Grid>
    );
  }
}