import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import Resume from '../../assets/Duerr_Natalie_Resume.pdf';

import Header from '../../components/navigation/Header';
import './home.scss';

import Sprinkle from '../../components/sprinkle/Sprinkle';
import BuildWave from '../../components/wave/BuildWave';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: false,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      sprinkleList: [],
      rotate: 0,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.addSprinkle = this.addSprinkle.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.title = 'Natalie Duerr';
  }

  playGame = (e) => {
    this.setState({ game: !this.state.game });
  };

  onMouseMove(e) {
    this.setState({ x: e.nativeEvent.pageX, y: e.nativeEvent.pageY });
  }

  handleKeyPress = (event) => {
    var currentX = this.state.x;
    var currentY = this.state.y;

    if (event.key === 'Enter' && this.state.game) {
      this.addSprinkle();
    } else if (event.key === 'ArrowLeft') {
      this.setState({ x: (currentX -= 48) });
    } else if (event.key === 'ArrowRight') {
      this.setState({ x: (currentX += 48) });
    } else if (event.key === 'ArrowUp') {
      this.setState({ y: (currentY -= 48) });
    } else if (event.key === 'ArrowDown') {
      this.setState({ y: (currentY += 48) });
    }
  };

  addSprinkle(e) {
    this.setState({
      sprinkleList: [...this.state.sprinkleList, { x: this.state.x, y: this.state.y, rotate: this.state.rotate }],
      rotate: 360 * Math.random(),
    });
    console.log(this.state.rotate)
  }

  render() {
    return (
      <main role='main' className={'games page'} onMouseMove={this.onMouseMove} onKeyDown={this.handleKeyPress}>
        <div className={'background'} onClick={this.addSprinkle}>
          <div
            id={'first-circle'}
            className={this.state.game ? null : 'hide'}
            style={{ top: this.state.y, left: this.state.x, transform: 'rotate(' + this.state.rotate + 'deg)' }}
            tabIndex={0}
          ></div>
          {this.state.sprinkleList.map((sprinkle, i) => {
            return <Sprinkle key={i} x={sprinkle.x} y={sprinkle.y} rotate={sprinkle.rotate} />;
          })}
        </div>
        <Grid container className={this.state.game ? 'home hide' : 'home'}>
          <Header activeTab={'home'}></Header>
          <Container>
            <Grid item xs={12}>
              <h6>Hi, my name is</h6>
            </Grid>
            <Grid item xs={12}>
              <h1>Natalie Duerr</h1>
            </Grid>
            <BuildWave></BuildWave>
            <Grid item xs={12}>
              <h2>
                I’m a designer and front-end developer located in Boston, MA. I strive to create enchanting and
                accessible experiences across platforms.
              </h2>
            </Grid>
            <Box display={{ xs: 'none', md: 'unset' }}>
              <Grid className={'links'} container item xs={12}>
                <Grid item>
                  <Link to='/projects'>Projects</Link>
                </Grid>
                <Grid item>
                  <Link to='/about'>About</Link>
                </Grid>
                <Grid item>
                  <a href={Resume} rel='noopener noreferrer' target='_blank'>
                    Résumé
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
        <Grid container justify={'center'} alignItems={'center'} className={this.state.game ? 'game' : 'game hide'}>
          <Grid item xs={6}>
            <p className='h5'>
              Move the sprinkles with your mouse (or keyboard) and click (or press enter) to add them to the background!
              If using the keyboard, make sure you are focusing on the sprinkle.
            </p>
          </Grid>
        </Grid>
        <Grid className={this.state.game ? 'play stay-open' : 'play'} container xs={12} item justify={'flex-end'}>
          <Button onClick={this.playGame}>
            <PlayArrowIcon />
            <span>{this.state.game ? 'Close Game' : 'Play a Game'}</span>
          </Button>
        </Grid>
      </main>
    );
  }
}
