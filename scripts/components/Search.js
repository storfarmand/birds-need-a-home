import React from 'react';

import * as SearchActions from '../actions/SearchActions';

export default class Search extends React.Component {
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
    this.search.addEventListener('click', () => {
      SearchActions.search({text: this.searchVal.value});
    });
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
          "search"
        ].join(' ')}
      >
        <input
          id="search"
          type="text"
          placeholder="Søg på birds-need-a-home"
          ref={(input) => {this.searchVal = input}}
        />
        <label
          htmlFor="search"
          ref={(button) => {this.search = button}}
        >Søg</label>
      </div>
    );
  }
}
