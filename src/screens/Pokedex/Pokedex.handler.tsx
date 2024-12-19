import { pokemons } from '../../data/pokemons';
import { useAppSelector } from '../../hooks/useReduxType';
import { addToMyPokemonAction, deleteFromMyPokemonAction } from '../../redux/actions/myPokeAction';
import store from '../../redux/store';
import { IPokemon } from '../../types/pokemon';

const usePokedex = () => {
  const myPokemons = useAppSelector(state => state.myPoke.pokemons);

  const addToMyPokemon = (pokemon: IPokemon) => {
    store.dispatch(addToMyPokemonAction(pokemon));
  };


  const deleteFromMyPokemon = (id: number) => {
    store.dispatch(deleteFromMyPokemonAction(id));
  };

  return { pokemons, myPokemons, addToMyPokemon, deleteFromMyPokemon };
};

export default usePokedex;
