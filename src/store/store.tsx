import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productsSlice';
import currencyReducer from '../redux/currencySlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    currency: currencyReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
