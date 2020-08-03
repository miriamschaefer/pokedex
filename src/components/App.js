import React from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';
import Header from './Header';
import Search from './Search';
import pokemonsFromApi from '../data/pokemons.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsFromApi,
      favPokemons: [],
      searchText: '',
    };
    this.favHandler = this.favHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  //probar a meter aquí el click para el unfav de la lista de favoritos
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

  searchHandler(ev) {
    const searchInput = ev.currentTarget.value.toLowerCase();
    this.setState({ searchText: searchInput });
  }

  render() {
    console.log(this.state);

    const newFavPokemons = this.state.pokemons.filter((pokemon) =>
      this.state.favPokemons.includes(pokemon.id + '')
    );

    const searchText = this.state.searchText;
    const pokemonsSearch = this.state.pokemons;

    const filteredPokemons = this.state.pokemons.filter((pokemon) =>
      this.state.searchText
        ? pokemon.name.toLowerCase().includes(searchText)
        : true
    );

    return (
      <div className="App">
        <Header />
        <Search searchHandler={this.searchHandler} />

        <PokeList
          pokemons={!filteredPokemons ? pokemonsSearch : filteredPokemons}
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
