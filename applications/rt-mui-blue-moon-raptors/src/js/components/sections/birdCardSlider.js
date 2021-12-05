import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import BirdCard from './birdCard';

import * as _config from '../../../../data/config.json';
import * as _raptorList from '../../../../data/raptorList.json';

const birdCardSlider = () => {
  const raptorArray = _raptorList.raptorArray;
  const assetBaseUrl = _config.assetBucket;

  const renderCardArray = () => {
    return raptorArray.map((item, index) => {
      const imageUrl = assetBaseUrl + item.imageUrl;
      return (
        <Fragment key={index}>
          <Grid item xs={12} sm={1} md={1}></Grid>
          <Grid item xs={12} sm={4} md={2}>
            <BirdCard description={item.description} title={item.name} image={imageUrl} />
          </Grid>
          <Grid item xs={12} sm={1} md={1}></Grid>
        </Fragment>);
    });
  };

  return (
    <Grid container spacing={0}>
      {renderCardArray()}
    </Grid>);
};

export default birdCardSlider;
