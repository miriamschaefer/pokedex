import React from 'react';
import FavPokemon from './Pokemon';

class FavList extends React.Component {
  render() {
    const favedPokemons = this.props.favPokemons.map((pokemon, index) => {
      console.log(pokemon);

      return <li key={index}>{pokemon}</li>;
    });

    return (
      <div>
        <h2>My fav Pokemon</h2>
        <ul className="App__container__favs">{favedPokemons}</ul>
      </div>
    );
  }
}

export default FavList;
