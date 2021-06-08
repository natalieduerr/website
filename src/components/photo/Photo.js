import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './projects.scss';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

import { SRLWrapper } from 'simple-react-lightbox';
import * as Constants from '../projects/detail/Options';

import img1 from '../../assets/imgs/photos/1.jpg';
import img2 from '../../assets/imgs/photos/2.jpg';
import img3 from '../../assets/imgs/photos/3.jpg';
import img4 from '../../assets/imgs/photos/4.jpg';
import img5 from '../../assets/imgs/photos/5.jpg';
import img6 from '../../assets/imgs/photos/6.jpg';
import img7 from '../../assets/imgs/photos/7.jpg';
import img8 from '../../assets/imgs/photos/8.jpg';
import img9 from '../../assets/imgs/photos/9.jpg';
import img10 from '../../assets/imgs/photos/10.jpg';
import img11 from '../../assets/imgs/photos/11.jpg';
import img12 from '../../assets/imgs/photos/12.jpg';
import img13 from '../../assets/imgs/photos/13.jpg';
import img14 from '../../assets/imgs/photos/14.jpg';

export default class Photo extends React.Component {
  componentDidMount() {
    document.title = 'Photos - Natalie Duerr';
  }

  render() {
    return (
      <div className={'page'}>
        <Grid container direction={'column'}>
          <Header activeTab={'photo'} />
          <main className='all-projects' role='main'>
            <Container className='photo'>
              <h1>Photography</h1>
              <Grid container direction={'row'} wrap={'wrap'} className='photo-wrap'>
                <SRLWrapper options={Constants.options}>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img1}
                      alt='Two people sit on a blanket under a tree during a sunny day. One person is looking at the other and pointing a camera at them. The second person is smiling towards the sun.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img2}
                      alt='Blossoming tree branches reach out from the left side of the frame. The sky is dark blue and cloudy.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img3}
                      alt='A woman stares down at the camera while standing on her front steps.'
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img4}
                      alt='A metal wire door to a local bodega is opened. There is a neon "Open" and "ATM" sign visible in the window. Snack items inside the store like Cheez-its are also visible.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img5}
                      alt='A woman looks off in the distance while standing in front of a gray brick wall. There is the shadow of a wrought iron window frame across her face.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img6}
                      alt='Four windows of an apartment complex are illuminated in different shades of blue and yellow at night. All of the other windows are dark.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img7}
                      alt='A woman laying on her stomach in bed is illuminated by a computer screen. She rests her head on blue pillow.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img8}
                      alt='A woman stands underneath a streetlamp looking up into a window of a house on the left. There is another house that fills the right side of the frame. '
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img9}
                      alt='A woman poses with sunglasses looking just past the camera. She wears a black blouse, layered with a brown tank top and patterened white and black pants. The sky behind her is bright blue.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img10}
                      alt='A woman peaks out from a glass wall pulling her glasses down below her eyes.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img11}
                      alt='A young woman with curled hair looks out a window to see what is happening above her.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img12}
                      alt='A young woman sits on a stoop outside of a brick building. She is looking into the distance. She wears a black leather jacket.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img13}
                      alt='A messy kitchen is illuminated by a sunny window. There is a pot and pan on the stove top, and a sheet pan and spatula on the counter.'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <img
                      src={img14}
                      alt='A close-up of cracked ice on the sidewalk. The cracks form a circular pattern and there are air bubbles from the ice defrosting.'
                    />
                  </Grid>
                </SRLWrapper>
              </Grid>
            </Container>
          </main>
          <Footer />
        </Grid>
      </div>
    );
  }
}
