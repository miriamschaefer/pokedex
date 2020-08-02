import React from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';
import Header from './Header';
import pokemonsFromApi from '../data/pokemons.json';
import FavList from './FavList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsFromApi,
      favPokemons: [],
    };
    this.favHandler = this.favHandler.bind(this);
  }

  favHandler(ev) {
    const favPokemons = this.state.favPokemons;

    if (favPokemons.includes(ev.currentTarget.id.toString())) {
      const selectedPokemon = ev.currentTarget.id.toString();
      const unFavedPokemon = favPokemons.filter(
        (pokemon) => pokemon !== selectedPokemon
      );

      this.setState({ favPokemons: unFavedPokemon });
    } else {
      favPokemons.push(ev.currentTarget.id);
      this.setState({ favPokemons: favPokemons });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PokeList
          pokemons={this.state.pokemons}
          favPokemons={this.state.favPokemons}
          favHandler={this.favHandler}
        />
        <FavList favPokemons={this.state.favPokemons} />
      </div>
    );
  }
}

export default App;
