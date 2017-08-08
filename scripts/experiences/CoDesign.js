import React from 'react';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';

export default class CoDesign extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div class={
          [
            this.props.constants.EXPERIENCE_ID.toLowerCase()
          ].join(' ')
        }>
        <Navigation />
        <Presentation />
      </div>
    );
  }
}
