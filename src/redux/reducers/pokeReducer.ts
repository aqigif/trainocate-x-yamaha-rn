import {AnyAction} from '@reduxjs/toolkit';
import {IPokemon} from '../../types/pokemon';
import {POKEMONS} from '../actionTypes';

interface IStore {
  pokemons: IPokemon[];
  loading: boolean;
  error: any;
  pokemonDetail: IPokemon | null;
  loadingDetail: boolean;
  errorDetail: any;
}

const initialState: IStore = {
  pokemons: [],
  loading: false,
  error: null,
  pokemonDetail: null,
  loadingDetail: false,
  errorDetail: null,
};

export const pokeReducer = (state = initialState, action: AnyAction) => {
  const payload = action?.payload as unknown as IStore;

  switch (action.type) {
    case POKEMONS.GET_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POKEMONS.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: payload.pokemons,
      };
    case POKEMONS.GET_POKEMONS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case POKEMONS.GET_POKEMON_DETAIL_REQUEST:
      return {
        ...state,
        loadingDetail: true,
      };
    case POKEMONS.GET_POKEMONS_DETAIL_SUCCESS:
      return {
        ...state,
        loadingDetail: false,
        pokemonDetail: payload.pokemonDetail,
      };
    case POKEMONS.GET_POKEMONS_DETAIL_FAILED:
      return {
        ...state,
        loadingDetail: false,
      };
    default:
      return {
        ...state,
      };
  }
};
