import React from 'react';

import Grid from '@material-ui/core/Grid';

import { SRLWrapper } from 'simple-react-lightbox';

import * as Constants from './Options';

export default class ImageBlock extends React.Component {
    render() {
        return (
            <div classNme={'photo-block'}>
                <Grid container direction={'row'} className={'photo-container'}>
                    <SRLWrapper options={Constants.options}>
                        {this.props.images.map((image) => (
                            <Grid item xs={12} sm={(image.size == null ? 12/this.props.images.length : image.size)} key={image.id}><img src={image.img} alt={image.alt} /></Grid>
                        ))}
                    </SRLWrapper>
                </Grid>
                <Grid container justify={'flex-end'}>
                    <Grid item xs={12} sm={8} md={4} >
                        <p className="caption">{this.props.caption} <a href={this.props.link}>{this.props.linkText}</a></p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}