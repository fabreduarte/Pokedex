const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;
  const moves = pokeDetail.moves.map((moveSlot) => moveSlot.move.name);
  const [move] = moves;
  const abilities = pokeDetail.abilities.map((abSlot) => abSlot.ability.name);
  const stats = pokeDetail.stats.map((statsSlot) => statsSlot.base_stat);
  const statsName = pokeDetail.stats.map((statsSlot) => statsSlot.stat.name);

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  pokemon.moves = pokeDetail.moves
  pokemon.weight = pokeDetail.weight
  pokemon.height = pokeDetail.height
  pokemon.abilities = pokeDetail.abilities
  pokemon.exp = pokeDetail.base_experience
  pokemon.moves = moves;
  pokemon.move = move;
  pokemon.abilities = abilities;
  pokemon.stats = stats;
  pokemon.statsName = statsName;

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)

}

pokeApi.getPokemonStats = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
      .then((response) => response.json())
      .then(convertPokeApiDetailToPokemon)
}
