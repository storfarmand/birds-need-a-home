import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ContentServices from '../services/ContentServices';
const contentServices = new ContentServices;

import Header from './Header';

class Image extends React.Component {
  render() {
    const imageId = parseInt(this.props.match.params.imageId, 10);
    const image = contentServices.getPic(imageId);
    return (
      <div class={
        [
          'gallery'
        ].join(' ')
      }>
        <Header type="4" text={image.title}/>
        <p>{image.desc}</p>
        <img src={image.src} alt=""/>
      </div>
    );
  }
}

export default withRouter(Image);
