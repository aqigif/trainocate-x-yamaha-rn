import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useReduxType';
import {
  addToMyPokemonAction,
  deleteFromMyPokemonAction,
} from '../../redux/actions/myPokeAction';
import {IPokemon} from '../../types/pokemon';
import { getPokemonsAction } from '../../redux/actions/pokeAction';

const usePokedex = () => {
  const dispatch = useAppDispatch();
  const myPokemons = useAppSelector(state => state.myPoke.pokemons);

  const {pokemons, loading} = useAppSelector(state => state.poke);

  useEffect(() => {
    dispatch(getPokemonsAction());
  }, [dispatch]);

  const addToMyPokemon = (pokemon: IPokemon) => {
    dispatch(addToMyPokemonAction(pokemon));
  };

  const deleteFromMyPokemon = (id: number) => {
    dispatch(deleteFromMyPokemonAction(id));
  };

  return {pokemons, loading, myPokemons, addToMyPokemon, deleteFromMyPokemon};
};

export default usePokedex;
