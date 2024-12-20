import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useStore } from 'react-redux';
import type { AppStore, RootState } from '../redux/store';
import store from '../redux/store';

export const useAppDispatch = () => store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
