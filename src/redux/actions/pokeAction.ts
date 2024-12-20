import {getPokemonByNameService, getPokemonsService} from '../../services';
import {POKEMONS} from '../actionTypes';

export const getPokemonsAction = () => async (dispatch: any) => {
  dispatch({type: POKEMONS.GET_POKEMONS_REQUEST});
  try {
    const response = await getPokemonsService();
    const newPokemons = response.results;
    const promises = Array.from(newPokemons || []).map(async (item: any, index) => {
      const payloadDetail = await getPokemonByNameService(item?.name || '');
      if (index === 0) {
        console.log(payloadDetail);
      }
      return {
        ...payloadDetail.data,
        id: payloadDetail?.id,
        name: payloadDetail?.name || '',
        image:
          payloadDetail?.sprites.front_default || '',
      };
    });
    const results = await Promise.all(promises);
    dispatch({
      type: POKEMONS.GET_POKEMONS_SUCCESS,
      payload: {
        pokemons: results,
      },
    });
  } catch (error) {
    dispatch({type: POKEMONS.GET_POKEMONS_FAILED});
  }
};
