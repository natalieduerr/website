import React from 'react';

import Grid from '@material-ui/core/Grid';

export default class ProjectHeader extends React.Component {
  render() {
    return (
      <Grid container>
        <section className='project-header'>
          <Grid item xs={12}>
            <h1>{this.props.title}</h1>
          </Grid>
          <Grid item container direction={'row'} xs={12}>
            <Grid item xs={6} md={3}>
              <h5>Category</h5>
              <ul>
                {this.props.category.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </Grid>
            {this.props.with !== null ? (
              <Grid item xs={6} md={3}>
                <h5>Role</h5>
                <p>{this.props.role}</p>
              </Grid>
            ) : null}
            <Grid item xs={12} sm={6} md={3}>
              <h5>Date</h5>
              <p>{this.props.date}</p>
            </Grid>
            {this.props.with !== null ? (
              <Grid item xs={12} sm={6} md={3}>
                <h5>In collaboration with</h5>
                <p>{this.props.with}</p>
              </Grid>
            ) : null}
          </Grid>
        </section>
      </Grid>
    );
  }
}
