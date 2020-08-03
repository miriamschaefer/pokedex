import React from 'react';

class FavList extends React.Component {
  render() {
    console.log(this.props.favPokemons);
    const favListPokemons = this.props.favPokemons.map((pokemon, index) => {
      return <li key={index}>{pokemon.name}</li>;
    });

    return (
      <div>
        <h2>My fav Pokemon</h2>
        <ul className="App__container__favs">{favListPokemons}</ul>
      </div>
    );
  }
}

export default FavList;
