import React from 'react';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from "../../components/navigation/Header";
import './home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <Grid container className="home">
                <Header activeTab={'home'}></Header>
                <Container>
                    <Grid item xs={12}>
                        <h6>Hi, my name is</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Natalie Duerr</h1>
                    </Grid>
                    <Grid item xs={12}>
                        {/* Squiggly line here eventually */}
                    </Grid>
                    <Grid item xs={12}>
                        <h2> I’m a designer and front-end developer located in Boston, MA. I strive to create enchanting and accessible experiences across platforms.
                    </h2>
                    </Grid>
                    <Box display={{ xs: 'none', md: 'unset' }}>
                        <Grid container item xs={12}>
                            <Grid item>
                                <Link to='/projects'>Projects</Link>
                            </Grid>
                            <Grid item>
                                <Link to='/about'>About</Link>
                            </Grid>
                            <Grid item>
                                <Link to='/resume'>Résumé</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Grid>
        );
    }
}

