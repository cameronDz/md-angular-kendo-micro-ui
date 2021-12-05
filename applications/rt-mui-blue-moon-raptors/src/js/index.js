import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import FooterSection from './components/sections/footer';
import HeaderSection from './components/sections/header';

ReactDOM.render(
  <BrowserRouter>
    <HeaderSection />
    <App />
    <FooterSection />
  </BrowserRouter>,
  document.getElementById('blue-moon-raptors-app')
);
