import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const pokemonResult = this.props.pokemons.map((pokemon, index) => {
      return (
        <Pokemon
          key={index}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          url={pokemon.url}
          evolution={pokemon.evolution}
        />
      );
    });

    return <ul className="App__container">{pokemonResult}</ul>;
  }
}

export default PokeList;
