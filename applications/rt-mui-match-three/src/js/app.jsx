import React, { Fragment } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Board } from './components/board';
import { Footer } from './components/footer';
import { appStyles as styles } from './styles';

const useStyles = makeStyles(() => styles);
const app = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classNames(classes.appContainer)}>
        <Board />
      </div>
      <Footer />
    </Fragment>
  );
};

export default app;
