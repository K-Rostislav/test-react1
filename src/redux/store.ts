import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filterSlice from './filterSlice/slice';
import loaderSlice from './loaderSlice/slice';
import cartSlice from './cartSlice/slice';
import productsSlice from './productsSlice/slice';
import searchSlice from './searchSlice/slice';

export const store = configureStore({
  reducer: {
    filterSlice,
    loaderSlice,
    cartSlice,
    productsSlice,
    searchSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
