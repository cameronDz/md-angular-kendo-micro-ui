import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as _config from '../../../../data/config.json';

const styles = {
  detail: {
    paddingBottom: '10px'
  },
  description: {
    fontSize: '14px',
    textAlign: 'center'
  },
  image: {
    borderRadius: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '10px',
    width: '84%'
  },
  title: {
    fontSize: '18px',
    fontWeight: '900',
    textAlign: 'center'
  }
};

const propTypes = {
  classes: PropTypes.object,
  details: PropTypes.object
};

const circularImage = ({ classes, details }) => {
  const imageUrl = _config.assetBucket + details.imageUrl;

  return (
    <div className={classes.detail}>
      <img className={classes.image} src={imageUrl}></img>
      <div className={classes.title}>{details.title}</div>
      <div className={classes.description}>{details.description}</div>
    </div>);
};

circularImage.propTypes = propTypes;
export default withStyles(styles)(circularImage);
