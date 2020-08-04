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

  //probar a meter aquí el click para el unfav de la lista de favoritos filtrando por clase? por id de nuevo?
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

  isTypeHandler(data) {
    this.setState({ [data.key]: data.value });
  }

  render() {
    console.log(this.state);

    const newFavPokemons = this.state.pokemons.filter((pokemon) =>
      this.state.favPokemons.includes(pokemon.id + '')
    );

    const searchText = this.state.searchText;
    const pokemonsSearch = this.state.pokemons;

    //como filtrar dos características del objeto en la búsqueda

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

      //preguntar a maría por qué me marca el checkbox de water también junto, y por qué no me sale con un ternario que ponga pokemon.types === 'fire', ¿cómo se podría filtrar todas en un método?

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
