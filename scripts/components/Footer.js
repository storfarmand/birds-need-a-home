import React from 'react';

import Header from './Header';

import ContentServices from '../services/ContentServices';
const contentServices = new ContentServices;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    this.setState({
        mounted: true
    })
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    })
  }
  render() {
    return (
      <div
        class={[
          "footer"
        ].join(' ')}
        ref={(component) => {this.footer = component}}
      >
        <div class="left">
          <Header type="3" text={"Kontakt"}/>
          <ul>
            <li>Mail: <a href="mailto:mail@birds-need-a-home.dk">mail@birds-need-a-home.dk</a></li>
            <li>Tlf: <a href="tel:+4511223344">11 22 33 44</a></li>
          </ul>
        </div>
        <div class="right">
          <Header type="3" text={"Find os:"}/>
          <ul>
            <li>Børupvej 190</li>
            <li>8310 Tranbjerg</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
