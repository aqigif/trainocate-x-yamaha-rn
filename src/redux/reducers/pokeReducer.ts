import {AnyAction} from '@reduxjs/toolkit';
import {IPokemon} from '../../types/pokemon';
import {
  POKEMONS,
} from '../actionTypes';

interface IStore {
  pokemons: IPokemon[];
  loading: boolean;
  error: any;
}

const initialState: IStore = {
  loading: false,
  error: null,
  pokemons: [],
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
    default:
      return {
        ...state,
      };
  }
};
