import { pokemons } from '../../data/pokemons';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxType';
import { addToMyPokemonAction, deleteFromMyPokemonAction } from '../../redux/actions/myPokeAction';
import { IPokemon } from '../../types/pokemon';

const usePokedex = () => {
  const dispatch = useAppDispatch();
  const myPokemons = useAppSelector(state => state.myPoke.pokemons);

  const addToMyPokemon = (pokemon: IPokemon) => {
    dispatch(addToMyPokemonAction(pokemon));
  };


  const deleteFromMyPokemon = (id: number) => {
    dispatch(deleteFromMyPokemonAction(id));
  };

  return { pokemons, myPokemons, addToMyPokemon, deleteFromMyPokemon };
};

export default usePokedex;
