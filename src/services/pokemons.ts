import {POKEMON_BASE_URL} from '.';

export const getPokemonsService = async () => {
  const response = await fetch(POKEMON_BASE_URL + '/pokemon');
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return await response.json();
};

export const getPokemonByNameService = async (name: string) => {
  const response = await fetch(POKEMON_BASE_URL + '/pokemon/' + name);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return await response.json();
};
