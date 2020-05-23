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
    document.title = 'Contuity - Natalie Duerr';
  }

  render() {
    return (
      <div className={'page'}>
        <Grid container direction={'column'}>
          <Header activeTab={''}></Header>
          <main className='project'>
            <Container>
              <Grid container justify={'center'}>
                <ProjectHeader
                  title={'Contuity'}
                  category={['Research', 'UX Design', 'Front-end Development']}
                  role={'Designer at Scout Studio'}
                  date={'Jan 2019 - April 2019'}
                  with={'Bahar Sheiki, Caitlin Wang, Eiry Lynch, Stephanie Ji, Ryan Hughes'}
                ></ProjectHeader>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>About</h4>
                  <p>
                    My third client with Scout was Contuity, a note-taking tool that focuses on helping people stay
                    connected. The app is designed for people who have a lot of relationships to keep track of and want
                    to prevent people from slipping through the cracks. Unlike other apps already on the market,
                    Contuity aims to be supportive, encouraging, and mindful. Contuity knows how busy its users are and
                    wants to alleviate the pressure so that the user feels in control.
                  </p>
                  <a
                    href={'https://www.figma.com/file/3PGwQGgW7UHH9WQZ0hTkUb/Hand-off-File-Copy?node-id=1%3A2'}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <Button className='primary' variant='contained' color='primary'>
                      View Figma Project
                    </Button>
                  </a>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Discovery</h4>
                  <p>
                    The first step in the process was understanding what Contuity was and wasn't and how that compares
                    to what already exists. With ideas from the client and pre-existing applications, we conducted two
                    different styles of interviews. One focused on how extremely busy people currently keep track of all
                    their connections and things they need to get done, while the other focused more on what features
                    people wanted to stay organized.
                  </p>
                  <p>
                    My team and I were able to collaborate on the questions and strategy, which led to us creating a
                    user test plan. Each of us followed this plan and conducted three interviews with people involved in
                    multiple organizations, worked several jobs, or who were just generally busy. This gave us a wealth
                    of information. Below are some of the questions we asked and an example of the results from the
                    sorting exercise.
                  </p>
                </Grid>
                <Grid container spacing={2} alignItems={'flex-start'} justify={'center'}>
                  <Grid item xs={12} sm={4}>
                    <ul>
                      <li>
                        When you have made a new connection who you are interested in working with, how did you propel
                        your relationships forward? What mechanisms or tools helped you do this?
                      </li>
                      <li>Are your tasks people-oriented or for yourself?</li>
                      <li>
                        Would you feel comfortable showing me your to-do list/life management system? If so, can you
                        walk me through it?
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <img
                      src={require('../../../assets/imgs/projects/contuity/sorting_1.png')}
                      alt='A wireframe showing how the user would input how many tickets they wanted and where they would like to be picked up.'
                      id='0'
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Personas</h4>
                  <p>
                    Through these interviews, we were able to gain insight into the hectic lives of several people.
                    These user interviews led to the creation of personas. We narrowed our users down to four main types
                    of people...
                  </p>
                  <ol>
                    <li>
                      <b>A young entrepreneur with a full-time marketing job.</b> This person is actively networking
                      inside and outside of the office and is constantly meeting new people. They need a way to remember
                      everyone and keep track of their thoughts. They use LinkedIn to connect with other professionals,
                      as well as Slack and Outlook to communicate with co-workers. To manage their personal life, they
                      use Google products.
                    </li>
                    <li>
                      <b>A working professional who travels frequently for work.</b> They are building new relationships
                      all the time, with people from all over the world. They need to organize meetings within a tight
                      schedule and maintain steady client relationships and communications. They are comfortable on the
                      computer, but also keep a notebook of important information to remember.
                    </li>
                    <li>
                      <b>Highly motivated and busy college student. </b> They need to keep up with rigorous course work
                      and coordinate events for the student organization they are a part of. They have to balance work
                      and social life and use Google and Apple products to do so. They are active on social media and
                      use that as a way to connect to people.
                    </li>
                    <li>
                      <b>A high involved community member and stay-at-home parent.</b> They have to stay on top of the
                      household tasks, as well as keep track of their children's events like sports, music lessons, and
                      Parent-Teacher meetings. They coordinate events for a local volunteer group and need a way to keep
                      in touch with members. They constantly have their hands full and need a quick way to jot things
                      down.
                    </li>
                  </ol>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Wireframing</h4>
                  <p>
                    With all this research and information from our client, it was time to decide on what features we
                    wanted to include and how the user would interact with them. Initially we planned to wireframe the
                    whole app, where we would lay out a few screens each week. However, we quickly ran into issues, such
                    as features not connecting and inconsistency between the designs.
                  </p>
                  <p>
                    After taking a week to regroup and assess the first few weeks of work, we decided that since this
                    project had a very large scope, we should focus on adding one feature per week and perfecting that
                    flow. For example, during week 1 of this new plan, each designer worked on a flow for creating a
                    note.
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <blockquote>
                    Though very basic, Contuity as an app could not function on any level if there was no ability to
                    create a note.{' '}
                  </blockquote>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <p>
                    With three designers, we were also able to ideate through different ways to complete this action.
                    Where does the button to add a note live, what does the empty state look like, how does a user view
                    all their notes? These were areas where our wireframes and flows differed. However, at the end of
                    each week, we spoke about our decisions and decided which aspects of each should be included. I then
                    took our screens and made the "final" set of wireframes. This process was much more manageable and
                    let us make sure everything worked the way it should.
                  </p>
                </Grid>
              </Grid>
            </Container>
            <ImageBlock
              images={[
                {
                  id: 1,
                  img: require('../../../assets/imgs/projects/contuity/1-1.png'),
                  alt:
                    "A wireframe showing the list of all jots with reminders. The ones that are overdue are at the top, followed by the one due the soonest. This is the user's main screen, but they can also view all their jots and jots that they marked as complete.",
                },
                {
                  id: 2,
                  img: require('../../../assets/imgs/projects/contuity/1-2.png'),
                  alt:
                    "A wireframe showing another section of the app 'Spaces'. Spaces are like folders and a way to sort through your jots. They would be sorted alphabetically and once you open the section, you can see the jots within.",
                },
                {
                  id: 3,
                  img: require('../../../assets/imgs/projects/contuity/1-3.png'),
                  alt:
                    "This wireframe shows the last main section of the app, People. This is a way to explore your jots by who you have tagged on them. Each 'Person' can contain a first name, last name, and photo.",
                },
                {
                  id: 4,
                  img: require('../../../assets/imgs/projects/contuity/1-4.png'),
                  alt:
                    "This wireframe shows what it would look to be editing a jot. The jot doesn't have a title, has a body, and has tagged 'Anna' on it. There are buttons above the keyboard to add a reminder, add another person, and to add a space.",
                },
              ]}
              caption={
                "These wireframes highlight the four main views of the app. We allowed the user to customize the jot and then explore those custom aspects. A jot contains a title, body, reminder, spaces, and people. This helps them stay organized and get reminded of a jot when they need to be! These fields also help the user stay accountable, especially the overdue section of 'Reminders'. "
              }
              link={'https://www.figma.com/file/3PGwQGgW7UHH9WQZ0hTkUb/Hand-off-File-Copy'}
              linkText={' View all of the wireframes on Figma.'}
            ></ImageBlock>
            <Container>
              <Grid container justify={'center'}>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>High Fidelity Screens</h4>
                  <p>
                    As I continued to work on wireframes, two other designers on my team tackled the UI. I served as a
                    mentor for them and provided support and critique. Throughout the wireframing and UI design process,
                    we made sure to design in a "component" manner to be mindful of future development efforts. I was
                    also able to advocate for accessible design and continued to remind the designers of the
                    considerations we needed to take.{' '}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <blockquote>
                    Being able to stand on the sidelines for the design phase helped me grow into more of a leadership
                    position and allowed me to advocate for meeting accessibility standards and for designing with
                    developers in mind.{' '}
                  </blockquote>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Front-end Development</h4>
                  <p>
                    Once I wrapped up the wireframes, I was able to begin creating a front-end system based on the
                    designs. Using React Native, I created a flexible design system that included our set colors, text
                    hierarchy, and basic reusable elements such as note cards, input fields, and buttons. Although I
                    wasn't able to style all of the flows built out by the developers, I was able to create a strong
                    base for future developers to utilize.{' '}
                  </p>
                  <p>
                    These screenshots capture some of what I was able to develop in just a few short weeks. I learned
                    how to style in React Native and how to create global stylesheets and components. If you'd like to
                    see the code I wrote, please email me and I can share a link to the repo!
                  </p>
                </Grid>
              </Grid>
            </Container>
            <ImageBlock
              images={[
                { id: 5, size: 1 },
                {
                  id: 6,
                  img: require('../../../assets/imgs/projects/contuity/2-1.png'),
                  alt:
                    "This is the log-in screen. It features two fields, one for the email and another for the password. Their is a light pink to dusty blue gradient in the background. The log-in button is not active since the user hasn't entered any information yet. It looks lighter/grayed out so the user can tell it isn't active. There is an option to 'Sign Up' if the user does not yet have an account",
                  size: 3,
                },
                {
                  id: 7,
                  img: require('../../../assets/imgs/projects/contuity/2-2.png'),
                  alt:
                    'This is what the app looks like with jots added in. The user has taken jots about questions to ask during a job panel and even one that is a remainder to update their resume! Some notes have people attached to them, this is represented by the circle with initials inside below the note.',
                  size: 3,
                },
                {
                  id: 8,
                  img: require('../../../assets/imgs/projects/contuity/2-3.png'),
                  alt:
                    "This is an example of two other buttons developed in the app. The user has the options to 'Delete All', which is their primary action and therefore a heavier looking button, or 'Cancel' which is just a text button.",
                  size: 4,
                },
                { id: 9, size: 1 },
              ]}
              caption={
                "These screenshots capture some of what I was able to develop in just a few short weeks. I learned how to style in React Native and how to create global stylesheets and components. If you'd like to see the code I wrote, please email me (natalieduerr98@gmail.com) and I can share a link to the repo!"
              }
              link={null}
              linkText={null}
            ></ImageBlock>
            <Container>
              <Grid container justify={'center'}>
                <Grid item xs={12} sm={10} md={8}>
                  <h4>Reflection</h4>
                  <p>
                    Working on Contuity was an amazing experience. As a more experienced design team member, I was able
                    to mentor new team members, while also receiving help from the more knowledgable developers! I was
                    able to push myself while working on the wireframes to create a cohesive and meditative experience
                    for our users. I got to make sure our app was designed with accessibility in mind and teach my team
                    members key standards.
                  </p>
                  <p>
                    Additionally, I had no prior experience with React Native so I am extremely thankful for the
                    kindness and patience my development team showed me while I learned the ropes. This was also my
                    first time developing something I didn't design. I got to understand the frustrations developers
                    face when designers continue to make changes to screens and components they previously said were
                    complete. I learned about development processes such as PRs and merge conflicts and got more
                    familiar with GitHub, Git and Terminal!
                  </p>
                  <p>
                    If there was one thing I could change, I wish we would have been able to add features like seeing
                    progress and including more fun, celebratory aspects in our app. Our app could have been more
                    friendly and encouraging with these features, but we, unfortunately, ran out of time.
                  </p>
                </Grid>
              </Grid>
            </Container>
          </main>
          <MoreProjects
            prev={'Mass Hike'}
            prevLink={'mass-hike'}
            next={'Ordering on BevSpot'}
            nextLink={'bevspot'}
          ></MoreProjects>
          <Footer></Footer>
        </Grid>
      </div>
    );
  }
}
