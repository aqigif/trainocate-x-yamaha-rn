import { configureStore } from '@reduxjs/toolkit';
import { myPokeReducer } from './reducers/myPokeReducer';

const store = configureStore({
    reducer: {
        myPoke: myPokeReducer,
    },
});

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export default store;
