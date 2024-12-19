import { IPokemon } from '../../types/pokemon';
import { GetState } from '../../types/redux';
import { ADD_TO_MY_POKEMON, DELETE_FROM_MY_POKEMON } from '../actionTypes';

export const addToMyPokemonAction =
  (pokemon: IPokemon) => (dispatch: any, getState: GetState) => {
    const { pokemons } = getState().myPoke;

    const newPokemons = [...pokemons, pokemon];
    dispatch({
      type: ADD_TO_MY_POKEMON,
      payload: {
        pokemons: newPokemons,
      },
    });
  };

export const deleteFromMyPokemonAction =
  (id: number) => (dispatch: any, getState: GetState) => {
    const { pokemons } = getState().myPoke;

    const newPokemons = pokemons.filter((item) => item.id !== id);
    dispatch({
      type: DELETE_FROM_MY_POKEMON,
      payload: {
        pokemons: newPokemons,
      },
    });
  };
