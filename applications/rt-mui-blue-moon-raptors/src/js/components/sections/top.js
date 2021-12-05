import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import * as _homeImages from '../../../../data/homeImages.json';
import * as _config from '../../../../data/config.json';

const styles = {
  image: {
    width: '100%'
  },
  title: {
    fontSize: '24px',
    paddingTop: '16px',
    textAlign: 'center'
  }
};

const propTypes = { classes: PropTypes.object };
const topSection = ({ classes }) => {
  const imageUrl = _config.assetBucket + _homeImages.header.imageUrl;
  return (
    <Grid item container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.title}>{_homeImages.header.title}</div>
      </Grid>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <img className={classes.image} src={imageUrl}></img>
      </Grid>
      <Grid item xs={12} sm={2}></Grid>
    </Grid>);
};

topSection.propTypes = propTypes;
export default withStyles(styles)(topSection);
