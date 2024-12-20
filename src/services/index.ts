export const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemonsService = async () => {
  const response = await fetch(baseUrl + '/pokemon');
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return await response.json();
};

export const getPokemonByNameService = async (name: string) => {
  const response = await fetch(baseUrl + '/pokemon/' + name);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return await response.json();
};
