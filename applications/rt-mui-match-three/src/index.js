import React from 'react';
import ReactDOM from 'react-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import App from './js/app';

const generateClassName = createGenerateClassName({
  productionPrefix: 'nssd'
});

ReactDOM.render(
  <StylesProvider generateClassName={generateClassName}>
    <App />
  </StylesProvider>,
  document.getElementById('match-three-board-root')
);
