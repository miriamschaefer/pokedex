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
      isType: false,
      isTypeWater: false,
    };
    this.favHandler = this.favHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.isTypeHandler = this.isTypeHandler.bind(this);
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

    localStorage.setItem('favPokemons', JSON.stringify(this.state.favPokemons));
  }

  //SEARCH AND FILTERS

  searchHandler(ev) {
    const searchInput = ev.currentTarget.value.toLowerCase();
    this.setState({ searchText: searchInput });
  }

  isTypeHandler(data) {
    this.setState({ [data.key]: data.value });
  }

  //LOCAL STORAGE

  // componentDidUpdate() {

  // }

  componentDidMount() {
    // for all items in state
    for (let id in this.state) {
      // if the id exists in localStorage - hasOwnProperty returns a boolean which specifies if the object has the property I'm looking for.
      if (localStorage.hasOwnProperty(id)) {
        // get the id's value from localStorage
        let value = localStorage.getItem(id);
        // parse the localStorage string and setState
        if ((value = JSON.parse(value))) {
          this.setState({ [id]: value });
        } else {
          // handle empty string
          this.setState({ [id]: value });
        }
      }
    }
  }

  render() {
    console.log(this.state);

    const newFavPokemons = this.state.pokemons.filter((pokemon) =>
      this.state.favPokemons.includes(pokemon.id + '')
    );

    const searchText = this.state.searchText;
    const pokemonsSearch = this.state.pokemons;

    //FIXME, waaaaay to long.

    const filteredPokemons = this.state.pokemons
      .filter((pokemon) => {
        if (pokemon.name.toLowerCase().includes(searchText)) {
          return true;
        } else if (
          searchText.includes('fi') &&
          pokemon.types.includes('fire')
        ) {
          return true;
        } else if (
          searchText.includes('w') &&
          pokemon.types.includes('water')
        ) {
          return true;
        } else if (searchText.includes('b') && pokemon.types.includes('bug')) {
          return true;
        } else if (
          searchText.includes('grass') &&
          pokemon.types.includes('grass')
        ) {
          return true;
        } else if (
          searchText.includes('f') &&
          pokemon.types.includes('flying')
        ) {
          return true;
        } else if (
          searchText.includes('po') &&
          pokemon.types.includes('poison')
        ) {
          return true;
        } else if (searchText.includes('r') && pokemon.types.includes('rock')) {
          return true;
        } else {
          return false;
        }
      })

      //FIXME. Want to add just one filter for all checkboxes here.

      .filter((pokemon) =>
        this.state.isType === true ? pokemon.types.includes('fire') : true
      )
      .filter((pokemon) =>
        this.state.isTypeWater === true ? pokemon.types.includes('water') : true
      )

      .filter((pokemon) =>
        this.state.isTypePoison === true
          ? pokemon.types.includes('poison')
          : true
      )

      .filter((pokemon) =>
        this.state.isTypeGrass === true ? pokemon.types.includes('grass') : true
      )
      .filter((pokemon) =>
        this.state.isTypeFlying === true
          ? pokemon.types.includes('flying')
          : true
      )
      .filter((pokemon) =>
        this.state.isTypeBug === true ? pokemon.types.includes('bug') : true
      )
      .filter((pokemon) =>
        this.state.isTypeRock === true ? pokemon.types.includes('rock') : true
      )

      .filter((pokemon) =>
        this.state.isTypeElectric === true
          ? pokemon.types.includes('electric')
          : true
      )
      .filter((pokemon) =>
        this.state.isTypeConfusion === true
          ? pokemon.types.includes('confusion')
          : true
      );

    return (
      <div className="App">
        <Header />
        <Search
          searchHandler={this.searchHandler}
          isType={this.state.isType}
          isTypeWater={this.state.isTypeWater}
          isTypeHandler={this.isTypeHandler}
        />

        <PokeList
          pokemons={!filteredPokemons ? pokemonsSearch : filteredPokemons}
          favPokemons={this.state.favPokemons}
          favHandler={this.favHandler}
        />

        <h2>Favoritos</h2>
        <PokeList
          className="pokemon-favs"
          pokemons={newFavPokemons}
          favPokemons={this.state.favPokemons}
          favHandler={this.favHandler}
        />
      </div>
    );
  }
}

export default App;
