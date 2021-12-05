import React from 'react';
import Grid from '@material-ui/core/Grid';

import ProgramImageSlider from '../sections/programImageSlider';
import ProgramsList from '../sections/programsList';

const programs = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <ProgramsList />
      </Grid>
      <Grid item xs={12} sm={3}></Grid>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <ProgramImageSlider />
      </Grid>
      <Grid item xs={12} sm={2}></Grid>
    </Grid>);
};

export default programs;
