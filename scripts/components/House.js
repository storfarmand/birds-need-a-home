import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ContentServices from '../services/ContentServices';
const contentServices = new ContentServices;

import Header from './Header';

class House extends React.Component {
  render() {
    const houseId = parseInt(this.props.match.params.houseId, 10);
    const house = contentServices.getHouse(houseId, true);
    let galleries = [];
    house.galleries.forEach((galleryId, idx) => {
      const gallery = contentServices.getGallery(galleryId);
      galleries.push(<li key={idx}>
        <Link to={`/gallery/${gallery.id}`}>
          <h2>{gallery.title}</h2>
          <p>{gallery.desc}</p>
            <img src={contentServices.getPic(gallery.pics[0]).src} alt=""/>
        </Link>
      </li>)
    })
    let features = [];
    house.holesize && house.holesize.length > 0 && features.push(<li key="0"><strong>Hulstørrelse:</strong> {house.holesize}</li>)
    house.housesize && house.housesize.length > 0 && features.push(<li key="1"><strong>Størrelse:</strong> {house.housesize}</li>)
    house.birds && house.birds.length > 0 && features.push(<li key="2"><strong>Størrelse:</strong> {house.birds}</li>)
    return (
      <div class={
        [
          'house'
        ].join(' ')
      }>
        <Header type="2" text={house.title}/>
        <ul>
          {features}
        </ul>
        <p>{house.desc}</p>
        <ul>
          {galleries}
        </ul>
      </div>
    );
  }
}

export default withRouter(House);
