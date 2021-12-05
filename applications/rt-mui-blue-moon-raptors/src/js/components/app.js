import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import ProgramsPage from './pages/programs';
import RaptorsPage from './pages/raptors';
import EducationPage from './pages/education';
import MissionPage from './pages/mission';
import SupportPage from './pages/support';

const app = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/education' component={EducationPage} />
      <Route exact path='/home' component={HomePage} />
      <Route exact path='/mission' component={MissionPage} />
      <Route exact path='/programs' component={ProgramsPage} />
      <Route exact path='/raptors' component={RaptorsPage} />
      <Route exact path='/support' component={SupportPage} />
    </Switch>);
};

export default app;
