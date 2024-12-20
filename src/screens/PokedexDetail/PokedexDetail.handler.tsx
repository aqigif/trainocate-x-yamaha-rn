import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxType';
import { getPokemonDetailAction } from '../../redux/actions/pokeAction';

const usePokedexDetail = ({ name }: { name: string }) => {
  const dispatch = useAppDispatch();
  const {pokemonDetail, loadingDetail} = useAppSelector(state => state.poke);

  useEffect(() => {
    if (name) {
      dispatch(getPokemonDetailAction(name));
    }
  }, [dispatch, name]);

  return { pokemonDetail, loadingDetail };
};

export default usePokedexDetail;
