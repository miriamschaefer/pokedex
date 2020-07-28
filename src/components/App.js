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
    };
  }
  render() {
    return (
      <div className="App">
        <Header />

        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
