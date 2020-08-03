import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchHandlerChild = this.searchHandlerChild.bind(this);
  }

  searchHandlerChild(ev) {
    this.props.searchHandler(ev);
  }

  render() {
    return (
      <form>
        <label htmlFor="search">Search for a pokemon </label>
        <input
          type="text"
          id="search"
          placeholder="Search your pokemon"
          onChange={this.searchHandlerChild}
        />
      </form>
    );
  }
}

export default Search;
