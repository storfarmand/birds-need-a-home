import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory();

import constants from './constants';
import config from '../assets/config.json';

import CoDesign from './experiences/CoDesign';

require('../styles/main.less');

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <Route exact path="/" render={() => (<CoDesign config={config} constants={constants}/>)}></Route>
      <Route path="/intro" render={() => (<CoDesign config={config} constants={constants} page="intro"/>)}></Route>
      <Route path="/structure" render={() => (<CoDesign config={config} constants={constants} page="structure"/>)}></Route>
      <Route render={() => (<CoDesign config={config} constants={constants}/>)}></Route>
    </Switch>
  </Router>,
app);
