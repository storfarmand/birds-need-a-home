import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

export default class Navigation extends React.Component {
  render() {
    return (
      <div class={
        [
          'navigation'
        ].join(' ')
      }>
        <Search />
        <div class="header">
          <a href="/"><h1 class="branding">Birds need a home</h1></a>
        </div>
        <nav role="navigation">
          <ul class="primary">
            <li class="active"><a href="#gds">GDS fuglehuse</a></li>
            <li><a href="#hul">Danmarks småfugle</a></li>
            <li><a href="#kontakt">Kontakt os</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
