const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

const fetchPokemon = () => fetch(ENDPOINT).then((response) => response.json());

export { fetchPokemon };
