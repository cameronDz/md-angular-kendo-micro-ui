import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    width: '100%'
  }
};

const propTypes = { classes: PropTypes.any, image: PropTypes.string, title: PropTypes.string };
const birdCard = ({ classes, image, title }) => {
  const cardImage = !!image && <img className={classes.card} src={image} />;
  return !!title && (
    <Fragment>
      <h1>{title}</h1>
      {cardImage}
    </Fragment>);
};

birdCard.propTypes = propTypes;
export default withStyles(styles)(birdCard);
