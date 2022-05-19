import React from 'react';

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
    document.title = 'Mass Hike - Natalie Duerr';
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
                    title={'Mass Hike'}
                    desc={'Designing to make nature more accessible for the Boston community'}
                    category={['Research', 'UX Design', 'Visual Design']}
                    role={'Designer at Scout Studio'}
                    date={'Jan 2018 - May 2018'}
                    with={'Camden Phalen, McKenna Shuster, Matthe Panzer, Vinny Carlino'}
                  ></ProjectHeader>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>About</h3>
                    <p>
                      During my second semester at Scout, I worked with Mass Hike as a designer. Mass Hike is a
                      non-profit focused on making nature more accessible to Bostonians. Mass Hike runs trips to and
                      from local reservations and parks, and from there, customers are free to explore or go on a hike
                      with the team lead. Mass Hike targets two groups: young professionals and low-income community
                      members. For distinct reasons, these two groups have a difficult time making it out of the city.
                      Mass Hike needed a brand that matched its unique mission, a marketing website that captured the
                      fun of nature, and a ticket-purchasing system that was simple and easy to use.
                    </p>
                    <a className='button' href={'https://masshike.org/'} rel='noopener noreferrer' target='_blank'>
                      <Button className='primary' variant='contained' color='primary'>
                        View Live Site
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Discovery</h3>
                    <p>
                      Before our team could dive into wireframes and designs, we first needed to understand who Mass
                      Hike's users were. To gain preliminary knowledge we created a survey that was shared with their
                      email list. This survey confirmed what the Mass Hike team shared with us, many of their customers
                      were working professionals who lacked transportation to nature and members of low-income
                      communities who, due to financial constraints, struggle to make it out of the city. As a team of
                      college students, we felt that we had a good grasp on the needs and goals of young professionals,
                      so we decided to focus our research efforts on understanding how we could help lower-income
                      community members.
                    </p>
                    <p>
                      Mass Hike was able to share several contacts with us so we could talk to real-life users. One of
                      the people on their list helped organize events in low-income housing developments and loved Mass
                      Hike’s goal. I was able to set up a phone call and talk to her about how we could best design for
                      the low-income community. The most important questions were…
                    </p>
                    <ul>
                      <li>
                        What type of technology do you see members of your community using? How often do they use
                        different forms of technology?
                      </li>
                      <li>What is the best way to contact members of your community?</li>
                      <li>
                        How do members of your community prefer to pay for things online? How common is it to not have a
                        credit card or bank account?
                      </li>
                    </ul>
                    <p>
                      Through this interview, I was able to gather valuable insight. We learned that many people are
                      using public computers to access the internet and most use non-smart phones on a day-to-day basis.
                      This meant that as a team we needed to focus on the desktop experience, as opposed to the mobile
                      one, as the main target audience was primarily using computers. She also mentioned that people
                      prefer paying in cash if possible and that many community members do not have a bank account or
                      credit card.
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <blockquote>
                      This information led to a large UX problem, how can we allow customers to pay in cash on an online
                      booking platform?
                    </blockquote>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <h4>Wireframing</h4>
                    <p>
                      Our first goal was to design a solution for the booking platform, the most critical part of the
                      project. The first question to tackle is how can we allow users to pay in cash online? Through
                      research, I found that Amazon allowed its users to pay in cash by partnering with 7/11. They could
                      add money to their Amazon account in-store and use that credit online. While we were no tech giant
                      like Amazon, their solution proposed meeting in person to finalize the purchase. To make this
                      solution work for Mass Hike, I needed to design a way for two people to meet in a designated
                      place. Through a previous connection with Boston Centers for Youth & Families, we were able to use
                      their locations as a meeting spot. From there, I designed a calendar system that allowed Mass Hike
                      team members to input when they were free and then a user could book that time and pick their
                      nearest Boston Centers for Youth & Families as the meeting place. This allowed users to pay in
                      cash and for Mass Hike to collect payment before the day of the trip.
                    </p>
                    <p>
                      On top of allowing users to pay in cash, we updated the ticket purchasing process to allow for
                      promo codes and pay-what-you-want tickets. Mass Hike offers $2.00 tickets to low-income families
                      and with our new system, Mass Hike could create a promo code and share it with the families that
                      qualified. The pay-what-you-want tickets allow users who may be able to pay extra to enter their
                      ticket price with the knowledge that they were helping subsidize the cost of tickets for
                      low-income families. These changes made the booking platform perfect for Mass Hike and its users.
                    </p>
                  </Grid>
                </Grid>
              </Container>
              <ImageBlock
                images={[
                  {
                    id: 1,
                    img: require('../../../assets/imgs/projects/mass-hike/1-1.png'),
                    alt:
                      'A wireframe showing how the user would input how many tickets they wanted and where they would like to be picked up.',
                  },
                  {
                    id: 2,
                    img: require('../../../assets/imgs/projects/mass-hike/1-2.png'),
                    alt:
                      'Another wireframe later in the ticket purchasing process. This screen asks if the users has a promo code (they do) and how much they want to pay for a ticket. The options are $2, $5, $8 or other amount. The user has entered $4 as the amount they would like to pay.',
                  },
                  {
                    id: 3,
                    img: require('../../../assets/imgs/projects/mass-hike/1-3.png'),
                    alt:
                      'This screen demonstrates the user filling out their information to pay for the tickets in cash. They have selected the location from a list, the date from a calendar, and the time from a dropdown.',
                  },
                ]}
                caption={
                  "These three screens demonstrate the unique aspects of our booking platform. Mass Hike makes three or four stops before traveling to their destination. They need to collect people's pick-up addresses to determine the most convenient locations for everyone. The second screen shows the user inputting a promo code and receiving a discounted ticket price. It also shows the way users can choose to pay for the price of their tickets. The final screen showcases the pay by cash set-up. "
                }
                link={'https://invis.io/B3P14DU5XYR'}
                linkText={'View all of the booking platform wireframes on InVision.'}
              ></ImageBlock>
              <Container>
                <Grid container justify={'center'}>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>High Fidelity Screens</h3>
                    <p>
                      After focusing on the booking platform, it was time to create a marketing site that would convince
                      people to join Mass Hike on a trip. Below are examples of the first screens I designed, and then
                      their final counterpart. We wanted the website to feel friendly, approachable, and tactile. The
                      first iterations felt too stiff and "papery", while our final designs connected with the brand,
                      while still feeling approachable.
                    </p>
                  </Grid>
                </Grid>
              </Container>
              <ImageBlock
                images={[
                  {
                    id: 4,
                    img: require('../../../assets/imgs/projects/mass-hike/2-1.png'),
                    alt:
                      'A wireframe showing how the user would input how many tickets they wanted and where they would like to be picked up.',
                  },
                  {
                    id: 5,
                    img: require('../../../assets/imgs/projects/mass-hike/2-2.png'),
                    alt:
                      'Another wireframe later in the ticket purchasing process. This screen asks if the users has a promo code (they do) and how much they want to pay for a ticket. The options are $2, $5, $8 or other amount. The user has entered $4 as the amount they would like to pay.',
                  },
                  {
                    id: 6,
                    img: require('../../../assets/imgs/projects/mass-hike/2-3.png'),
                    alt:
                      'This screen demonstrates the user filling out their information to pay for the tickets in cash. They have selected the location from a list, the date from a calendar, and the time from a dropdown.',
                  },
                  {
                    id: 7,
                    img: require('../../../assets/imgs/projects/mass-hike/2-4.png'),
                    alt:
                      'This screen demonstrates the user filling out their information to pay for the tickets in cash. They have selected the location from a list, the date from a calendar, and the time from a dropdown.',
                  },
                ]}
                caption={
                  'These two examples showcase how much I learned during this time. At first, the designs looked too much like the wireframes. Through iteration, I was able to use the wireframes as a general guide and push the UI in new directions! '
                }
                link={'https://invis.io/5UP7B56J6X7'}
                linkText={'View all of the booking platform high fidelity screens on InVision.'}
              ></ImageBlock>
              <Container>
                <Grid container justify={'center'}>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Reflection</h3>
                    <p>
                      Mass Hike was one of the most educational and valuable projects I have worked on to date. I grew
                      SO much in those four months and was able to work with an incredibly hard-working team. Looking
                      back, I wish my team and I were more cognizant of accessibility guidelines, and that is definitely
                      the one thing I would change about this project. I can’t go back in time and tweak colors and font
                      styles, but I can use this experience to learn how to do better!
                    </p>
                    <p>
                      Additionally, I wish we were able to do a better analysis of our work. We were unable to collect
                      quantitative results for the rebrand and site redesign. It would be great to know if there are any
                      pain points during the new booking process that we did not uncover during testing or even where
                      users are spending the most time. Though the continued success of Mass Hike speaks volumes, it
                      would be great to confirm that with numbers.
                    </p>
                    <p>
                      Since completion, Mass Hike has continued to take Bostonians out to nature and increase brand
                      awareness through our website. Additionally, Mass Hike was able to use our branding on merchandise
                      to help fundraise money for their organization.
                    </p>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <MoreProjects
              prev={'Online Resources'}
              prevLink={'online-resources'}
              next={'Contuity'}
              nextLink={'contuity'}
            ></MoreProjects>
          </main>
          <Footer></Footer>
        </Grid>
      </div>
    );
  }
}
