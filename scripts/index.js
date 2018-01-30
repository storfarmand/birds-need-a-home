import React from 'react';
import ReactDOM from 'react-dom';

import constants from './constants';
import config from './config.json';
import content from './content.json';

import Home from './experiences/Home';

require('../styles/main.less');

const app = document.querySelector('.app');
ReactDOM.render(
  <Home config={config} constants={constants} content={content} />
,app);
