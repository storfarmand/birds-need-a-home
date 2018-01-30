import React from 'react';
import { Router, Switch, Route } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory();

import MetaTag from '../components/MetaTag';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';
import House from '../components/House';
import Gallery from '../components/Gallery';
import Image from '../components/Image';

import HomeStore from '../stores/HomeStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentWillMount() {
    HomeStore.on('text:search', (obj) => {
      console.log(obj);
    });
  }
  componentDidMount() {
    this.setState({
        mounted: true
    });
    let title = document.querySelector('title');
    if (title) {
      title.innerText = this.props.content.title;
    } else {
      let title = document.createElement('title');
      title.innerText = this.props.content.title;
      document.querySelector('head').prepend(title);
    }
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    })
  }
  render() {
    console.log(this.props);
    return (
      <div class={
          [
            this.props.constants.EXPERIENCE_ID.toLowerCase().replace(/\s/g, '-')
          ].join(' ')
        }>
        <MetaTag tags={this.props.content.metadata}/>
        <Navigation />
        <Router history={customHistory}>
          <Switch>
            <Route exact path="/" render={() => (<Presentation title={this.props.content.title} />)}></Route>
            <Route path="/house/:houseId" render={() => (<House />)}></Route>
            <Route path="/gallery/:galleryId" render={() => (<Gallery />)}></Route>
            <Route path="/image/:imageId" render={() => (<Image />)}></Route>
            <Route path="/structure" render={() => (<Home config={config} constants={constants} content={content} page="structure"/>)}></Route>              <Route render={() => (<Home config={config} constants={constants} content={content} />)}></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Home
