import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ContentServices from '../services/ContentServices';
const contentServices = new ContentServices;

import Header from './Header';

class Presentation extends React.Component {
  render() {
    const houses = contentServices.getAllHouses(true).map((house, idx) => {
      return <li key={idx}>
        <Link to={`/house/${house.id}`}>
          <h2>{house.title}</h2>
          <p>{house.desc}</p>
            <img src={contentServices.getPic(house.feature).src} alt=""/>
        </Link>
      </li>
    });
    return (
      <div class={
        [
          'presentation'
        ].join(' ')
      }>
        <Header type="1" text={this.props.title}/>
        <ul>
          {houses}
        </ul>
      </div>
    );
  }
}

export default withRouter(Presentation);
