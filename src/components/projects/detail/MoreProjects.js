import React from 'react';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

export default class MoreProjects extends React.Component {
    render() {
        return (
            <Container>
                <Grid justify={'space-between'} container direction={'row'} className={'more-projects'}>
                    <Grid item xs={12} sm>
                        <p>Previous Project</p>
                        <Link to={'./projects/' + this.props.prevLink}>{this.props.prev}</Link>
                    </Grid>
                    <Grid item xs={12} sm container direction={'column'} alignItems={'flex-end'}>
                        <p>Next Project</p>
                        <Link to={'./projects/' + this.props.nextLink}>{this.props.next}</Link>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}