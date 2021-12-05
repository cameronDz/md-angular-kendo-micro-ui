import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import { footerStyles as styles } from './styles';
import packageInfo from '../../../../package.json';

const useStyles = makeStyles(() => styles);
const Footer = () => {
  const homepageUrl = packageInfo.author.url;
  const name = packageInfo.author.name;
  const repositoryUrl = packageInfo.repository.url;

  const classes = useStyles();
  return (
    <footer
      className={classNames('nssd-footer-container', classes.footerContainer)}
    >
      <p className={classNames(classes.footerVerbiage)}>
        <span className={classNames(classes.appTitle)}>
          {`Match-Three @v${packageInfo.version}`}
        </span>
        <span>. Created by </span>
        <a href={homepageUrl || '/#'} target="_">
          {name}
        </a>
        <span>. Repository on </span>
        <a href={repositoryUrl || '/#'} target="_">
          GitHub
        </a>
        <span>.</span>
      </p>
    </footer>
  );
};

export { Footer };
