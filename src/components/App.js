import React from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';
import Header from './Header';
import pokemonsFromApi from '../data/pokemons.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsFromApi,
      favPokemons: [],
    };
    this.favHandler = this.favHandler.bind(this);
  }

  favHandler(clickedId) {
    const favPokemons = this.state.favPokemons;

    if (favPokemons.includes(clickedId)) {
      const selectedPokemon = clickedId;
      const unFavedPokemon = favPokemons.filter(
        (pokemon) => pokemon !== selectedPokemon
      );
      this.setState({ favPokemons: unFavedPokemon });
    } else {
      favPokemons.push(clickedId);
      this.setState({ favPokemons: favPokemons });
    }
  }

  // searchHandler(ev {
  //   const searchInput = ev.currentTarget.value.toLowerCase();
  //   this.setState
  // })

  render() {
    console.log(this.state);

    const newFavPokemons = this.state.pokemons.filter((pokemon) =>
      this.state.favPokemons.includes(pokemon.id + '')
    );

    return (
      <div className="App">
        <Header />
        <PokeList
          pokemons={this.state.pokemons}
          favPokemons={this.state.favPokemons}
          favHandler={this.favHandler}
        />
        <h2>Favoritos</h2>
        <PokeList
          pokemons={newFavPokemons}
          favPokemons={this.state.favPokemons}
        />
      </div>
    );
  }
}

export default App;
