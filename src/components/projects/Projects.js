import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from '../../components/navigation/Header';
import ProjectCard from './ProjectCard';

export default class Projects extends React.Component {
  render() {
    return (
      <Grid container className="home">
        <Header activeTab={'home'}></Header>
        <Container>
          <ProjectCard name={'Mass Hike'} type={'Research, UX Design, and Visual Design'} link={"mass-hike"}></ProjectCard>
          <ProjectCard name={'Contuity'} type={'Research, UX Design, and Development'} link={"contuity"}></ProjectCard>
          <ProjectCard name={'Ordering on BevSpot'} type={'Research, UX Design, and Visual Design'} link={"bevspot"}></ProjectCard>
          <ProjectCard name={'Agnès Varda Poster'} type={'Typography, Print Design'} link={"agnes"}></ProjectCard>
          <ProjectCard name={'Women in Film'} type={'Typography, Print Design'} link={"wif"}></ProjectCard>
          <ProjectCard name={'Online Resources'} type={'UX Design and Visual Design'} link={"online-resources"}></ProjectCard>
        </Container>
      </Grid>
    );
  }
}
