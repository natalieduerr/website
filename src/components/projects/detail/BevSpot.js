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

export default class BevSpot extends React.Component {
  componentDidMount() {
    document.title = 'Ordering - Natalie Duerr';
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
                    title={'Ordering on BevSpot'}
                    category={['Research', 'UX Design', 'Visual Design']}
                    role={'Junior Designer at BevSpot'}
                    date={'Sept 2019 - Jan 2020'}
                    with={'McKenna Curtis'}
                  ></ProjectHeader>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>About</h3>
                    <p>
                      BevSpot is software used by the food and beverage industry to streamline operations. From placing
                      orders and taking inventory to tracking sales, BevSpot provides a platform for its users to better
                      understand their establishment. Throughout BevSpot's development, different areas of the app are
                      updated to include new features. When I was tasked with improving the Ordering feature, it hadn't
                      been touched since the initial launch nearly 5 years ago! On top of needing to make major UX
                      improvements, the team also wanted to include a way to connect with global vendors like Sysco.
                      Working with a Project Manager, I was tasked with doing an overhaul of our ordering flow. This
                      included completing user research, wireframing solutions and testing them at various stages, and
                      then creating high fidelity screens using BevSpot's new brand.
                    </p>
                    <a
                      href={'https://www.sketch.com/s/781a1889-a88a-4f96-969f-8de40a5df2ef'}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <Button className='primary' variant='contained' color='primary'>
                        View Sketch Cloud
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Discovery</h3>
                    <p>
                      After our kick-off meeting, I immediately deep dove into the current ordering flow. Having
                      experience in a professional kitchen helped me immediately catch some UX issues. After noting my
                      experience, I turned to FullStory to see where our users were getting stuck. Then I did a
                      competitive analysis on both mobile and desktop to understand how our competitors have tried to
                      streamline the ordering process.
                    </p>
                    <p>
                      With all this research, it was time to reach out to our users. BevSpot has several vocal customers
                      who love to provide feedback and their ideas so I was able to connect with them to hear what
                      changes they wanted to see in our ordering flow.
                    </p>
                    <p>
                      During these calls, it became very clear the biggest issue was ordering in different units (i.e.
                      750 ML vs 1L bottle) and having multiple vendors for one item (i.e. broccoli can be purchased from
                      many places). Our current product provided no solution for these problems so it was clear this
                      would be a good place to start.
                    </p>
                    <p>
                      From these chats and my own research, I created a user research report which I presented to the
                      main stakeholders to validate 1) the need for this update and 2) the scale of this project and its
                      affect on the rest of the product
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Wireframing</h3>
                    <p>
                      With all of this research, it was time to start coming up with possible solutions. We began by
                      whiteboarding ideas during Design Team meetings and just throwing out whatever we thought. Below
                      is an example of a whiteboard exercise we did for adding items from different vendors, like Sysco
                      or BevSpot's default catalog.
                    </p>
                    <img
                      src={require('../../../assets/imgs/projects/bevspot/1.JPG')}
                      alt='A sketch of what the interaction for adding items from the Sysco or BevSpot catalogs could look like'
                    />
                    <br />
                    <br />
                    <p>
                      These meetings provided valuable ideas and a base for my first round of wireframes. Throughout the
                      wireframing process, I conducted two more rounds of user testing with internal teammates and the
                      users we initially spoke with. This provided a consistent stream of feedback to incorporate into
                      my work.
                    </p>
                  </Grid>
                </Grid>
              </Container>
              <ImageBlock
                images={[
                  {
                    id: 1,
                    img: require('../../../assets/imgs/projects/bevspot/2-1.png'),
                    alt:
                      'A wireframe showing the first iteration of the main ordering screen. Users are presented with the items and their preferred vendor initially and need to expand the row to see other vendors. They see their inventory, par levels, a suggested order, and order quantity for each item.',
                  },
                  {
                    id: 2,
                    img: require('../../../assets/imgs/projects/bevspot/2-2.png'),
                    alt:
                      'A wireframe showing off the item card area. This feature would allow a user to have a main item with a a name, categories, and unit of measure, and then all the vendors who sell this item. The other tabs for an item include information on inventory, recipe usage, history, notes, and mapping in this iteration',
                  },
                  {
                    id: 3,
                    img: require('../../../assets/imgs/projects/bevspot/2-3.png'),
                    alt:
                      'This wireframe is of the final cart screen. Here the user reviews the order and fixes an issues. This wireframe shows two issues that the user must fix before placing the order.',
                  },
                ]}
                caption={
                  'These screens are from my first round of wireframing and testing. Though they included the features requested by users during research, it became clear during user testing that the users felt too overwhelmed and confused. These screens needed to be simplified in order to make the new functionality successful'
                }
              ></ImageBlock>
              <Container>
                <Grid container justify={'center'}>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>High Fidelity Screens</h3>
                    <p>
                      After finalizing the user interaction, it was time to apply our new brand to these screens. During
                      this phase, I had the opportunity to make this flow feel less overwhelming and support the user
                      through the new process I had designed. Below is a sample of the final screens for the updated
                      ordering process.
                    </p>
                  </Grid>
                </Grid>
              </Container>
              <ImageBlock
                images={[
                  {
                    id: 4,
                    img: require('../../../assets/imgs/projects/bevspot/3-1.png'),
                    alt:
                      'This screen is the main ordering screen. It has several key actions at the top and then a listing of all the items below. A user can change the information for the columns. One item is opened to show the other vendors this item can be purchased from',
                  },
                  {
                    id: 5,
                    img: require('../../../assets/imgs/projects/bevspot/3-2.png'),
                    alt: '',
                  },
                  {
                    id: 6,
                    img: require('../../../assets/imgs/projects/bevspot/3-3.png'),
                    alt:
                      "This is an example of two other buttons developed in the app. The user has the options to 'Delete All', which is their primary action and therefore a heavier looking button, or 'Cancel' which is just a text button.",
                  },
                ]}
                caption={
                  'After several rounds of user testing this is where I landed. I was able to simplify the initial wireframes and effectively apply our new brand. At this point, the teams focus shifted to a new mobile app, at which point efforts for updating Cart Builder were paused.'
                }
                link={null}
                linkText={null}
              ></ImageBlock>
              <Container>
                <Grid container justify={'center'}>
                  <Grid item xs={12} sm={10} md={8}>
                    <h3 className='h4'>Reflection</h3>
                    <p>
                      Though this product update was never launched, I learned so much about the process of providing
                      new updates to users. It is so easy to be on the user side and just think "Wow it would have been
                      so much better if the team did X over Y", but being on the product side showed how much thought,
                      research, and effort goes into every interaction. I also learned more about advocating for
                      accessible design and better UX in a professional setting where budget and time constraints are a
                      real concern.
                    </p>
                    <p>
                      If this were to have launched, to consider my redesign successful I would have wanted to see the
                      following:
                    </p>
                    <ol>
                      <li>An increase in users placing orders through BevSpot</li>
                      <li>
                        A decrease in the average number of items in a user's account (items like 750mL and 1L bottles
                        of the same product could now be combined to one item)
                      </li>
                      <li>
                        Users utilizing the Sysco catalog to place orders with Sysco through BevSpot (not possible in
                        the current product)
                      </li>
                      <li>Positive user feedback from Sales and Customer Success teams</li>
                    </ol>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <MoreProjects
              prev={'Contuity'}
              prevLink={'contuity'}
              next={'A Year in Film'}
              nextLink={'film'}
            ></MoreProjects>
          </main>
          <Footer></Footer>
        </Grid>
      </div>
    );
  }
}
