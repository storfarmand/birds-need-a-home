import React from 'react';

export default class MetaTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    this.setState({
        mounted: true
    });
    let head = document.querySelector('head');
    this.props.tags.forEach((tag) => {
      let metatag = document.createElement('meta');
      for (var key in tag) {
        metatag.setAttribute(key, tag[key]);
      }
      head.prepend(metatag);
    });
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    })
  }
  render() {
    return null;
  }
}
