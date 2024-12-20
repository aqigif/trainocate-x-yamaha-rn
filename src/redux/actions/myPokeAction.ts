import AsyncStorage from '@react-native-async-storage/async-storage';
import { IPokemon } from '../../types/pokemon';
import { GetState } from '../../types/redux';
import { ADD_TO_MY_POKEMON, DELETE_FROM_MY_POKEMON } from '../actionTypes';
import { AsyncStorageKeys } from '../../services/storageServices';

export const addToMyPokemonAction =
  (pokemon: IPokemon) => (dispatch: any, getState: GetState) => {
    const {pokemons} = getState().myPoke;

    const newPokemons = [...pokemons, pokemon];
    AsyncStorage.setItem(AsyncStorageKeys.myPokemons, JSON.stringify(newPokemons));
    dispatch({
      type: ADD_TO_MY_POKEMON,
      payload: {
        pokemons: newPokemons,
      },
    });
  };


export const getMyPokemons =
() => async (dispatch: any) => {
  const newPokemonsStorage = await AsyncStorage.getItem(AsyncStorageKeys.myPokemons);

  if(!newPokemonsStorage) {
    return null;
  }
  const newPokemons = JSON.parse(newPokemonsStorage);
  dispatch({
    type: ADD_TO_MY_POKEMON,
    payload: {
      pokemons: newPokemons,
    },
  });
};

export const deleteFromMyPokemonAction =
  (id: number) => (dispatch: any, getState: GetState) => {
    const {pokemons} = getState().myPoke;

    const newPokemons = pokemons.filter(item => item.id !== id);
    dispatch({
      type: DELETE_FROM_MY_POKEMON,
      payload: {
        pokemons: newPokemons,
      },
    });
  };
