import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ContentServices from '../services/ContentServices';
const contentServices = new ContentServices;

import Header from './Header';

class Gallery extends React.Component {
  render() {
    const galleryId = parseInt(this.props.match.params.galleryId, 10);
    const gallery = contentServices.getGallery(galleryId);
    let images = [];
    gallery.pics.forEach((imageId, idx) => {
      const image = contentServices.getPic(imageId);
      images.push(<li key={idx}>
        <Link to={`/image/${image.id}`}>
          <h2>{image.title}</h2>
          <p>{image.desc}</p>
            <img src={image.src} alt=""/>
        </Link>
      </li>)
    })
    return (
      <div class={
        [
          'gallery'
        ].join(' ')
      }>
        <Header type="3" text={gallery.title}/>
        <p>{gallery.desc}</p>
          <ul>
            {images}
          </ul>
      </div>
    );
  }
}

export default withRouter(Gallery);
