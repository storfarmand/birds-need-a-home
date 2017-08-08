import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return (
      <div class={
        [
          'navigation'
        ].join(' ')
      }>
      <div className="header">
        <img class="logo" src={require('../../images/logo.png')} alt="LEGO System A/S"/>
        <h1 class="branding">CoDesign</h1>
      </div>
      <nav role="navigation">
        <ul>
          <li><Link to="/intro">Get Started</Link></li>
          <li><Link to="/structure">Visual Structure</Link></li>
          <li><Link to="/elements">Elements</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/widgets">Widgets</Link></li>
          <li><Link to="/templates">Templates</Link></li>
          <li><Link to="/seo">SEO &amp; Analytics</Link></li>
          <li><Link to="/downloads">Downloads</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
    );
  }
}
