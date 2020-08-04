import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchHandlerChild = this.searchHandlerChild.bind(this);
    this.isTypeHandlerChild = this.isTypeHandlerChild.bind(this);
  }

  searchHandlerChild(ev) {
    this.props.searchHandler(ev);
  }

  isTypeHandlerChild(ev) {
    this.props.isTypeHandler({
      key: ev.target.name,
      value: ev.target.checked,
    });
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
        <span> Filter by type: </span>
        <label htmlFor="type-filter">
          <input
            type="checkbox"
            id="type-fire"
            name="isType"
            checked={this.props.isType}
            onChange={this.isTypeHandlerChild}
          />
          Fire
        </label>
        <label htmlFor="type-water-filter">
          <input
            type="checkbox"
            id="type-water"
            name="isTypeWater"
            checked={this.props.isTypeWater}
            onChange={this.isTypeHandlerChild}
          />
          Water
        </label>

        <label htmlFor="type-grass-filter">
          <input
            type="checkbox"
            id="type-grass"
            name="isTypeGrass"
            checked={this.props.isTypeGrass}
            onChange={this.isTypeHandlerChild}
          />
          Grass
        </label>

        <label htmlFor="type-Flying-filter">
          <input
            type="checkbox"
            id="type-Flying"
            name="isTypeFlying"
            checked={this.props.isTypeFlying}
            onChange={this.isTypeHandlerChild}
          />
          Flying
        </label>

        <label htmlFor="type-Bug-filter">
          <input
            type="checkbox"
            id="type-Bug"
            name="isTypeBug"
            checked={this.props.isTypeBug}
            onChange={this.isTypeHandlerChild}
          />
          Bug
        </label>

        <label htmlFor="type-Rock-filter">
          <input
            type="checkbox"
            id="type-Rock"
            name="isTypeRock"
            checked={this.props.isTypeRock}
            onChange={this.isTypeHandlerChild}
          />
          Rock
        </label>

        <label htmlFor="type-Electric-filter">
          <input
            type="checkbox"
            id="type-Electric"
            name="isTypeElectric"
            checked={this.props.isTypeElectric}
            onChange={this.isTypeHandlerChild}
          />
          Electric
        </label>
        <label htmlFor="type-Confusion-filter">
          <input
            type="checkbox"
            id="type-Confusion"
            name="isTypeConfusion"
            checked={this.props.isTypeConfusion}
            onChange={this.isTypeHandlerChild}
          />
          Confusion
        </label>
        <label htmlFor="type-Poison-filter">
          <input
            type="checkbox"
            id="type-Poison"
            name="isTypePoison"
            checked={this.props.isTypePoison}
            onChange={this.isTypeHandlerChild}
          />
          Poison
        </label>
      </form>
    );
  }
}

export default Search;
