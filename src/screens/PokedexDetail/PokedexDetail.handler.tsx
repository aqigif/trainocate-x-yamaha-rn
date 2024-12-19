import { pokemons } from '../../data/pokemons';

const usePokedexDetail = ({ num }: { num: number }) => {
  const pokemon = pokemons.find((p) => p.id === num);
  return { pokemon };
};

export default usePokedexDetail;
