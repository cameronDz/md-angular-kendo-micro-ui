import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import CircularImage from './circularImage';
import * as _missionStatment from '../../../../data/missionStatements.json';
import * as _homeImages from '../../../../data/homeImages.json';

const styles = {
  gridSpacer: {
    paddingBottom: '10px',
    paddingTop: '10px'
  },
  mission: {
    fontSize: '22px',
    fontWeight: '900',
    textAlign: 'center'
  }
};

const propTypes = { classes: PropTypes.object };
const homeBottomSection = ({ classes }) => {
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.mission}>
            {_missionStatment.shortened}
          </div>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
      <div className={classes.gridSpacer}></div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={1} md={2}></Grid>
        <Grid item xs={12} sm={5} md={2}>
          <CircularImage details={_homeImages.programs} />
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <CircularImage details={_homeImages.birds} />
        </Grid>
        <Hidden mdUp>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={12} sm={1}></Grid>
        </Hidden>
        <Grid item xs={12} sm={5} md={2}>
          <CircularImage details={_homeImages.mission} />
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <CircularImage details={_homeImages.education} />
        </Grid>
        <Grid item xs={12} sm={1} md={2}></Grid>
      </Grid>
    </Fragment>);
};

homeBottomSection.propTypes = propTypes;
export default withStyles(styles)(homeBottomSection);
