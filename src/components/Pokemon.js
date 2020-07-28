import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const pokemonTypes = this.props.types;
    const types = pokemonTypes.map((type, index) => {
      return <li key={index}>{type}</li>;
    });

    return (
      <li className="App__container__pokemon">
        <h2 className="App__container__pokemon__name">{this.props.name}</h2>
        <img src={this.props.url} alt={this.props.name} />
        <p className="App__container__pokemon__evolution__title">Evolution:</p>
        <p className="App__container__pokemon__evolution__pokemons">
          {this.props.evolution === null
            ? 'Primera evolución'
            : this.props.evolution}
        </p>
        <div className="App__container__pokemon__types">
          <p className="App__container__pokemon__types__title">Types:</p>
          <ul className="App__container__pokemon__types__content">{types}</ul>
        </div>
      </li>
    );
  }
}

Pokemon.defaultProps = {
  evolution: 'No data',
};

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Pokemon;
