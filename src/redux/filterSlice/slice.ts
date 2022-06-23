import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterSliceType } from './types';

const initialState: filterSliceType = {
  categoryId: 0,
  sort: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
        state.categoryId = action.payload;
    },
    selectSort: (state, actions: PayloadAction<string>) => {
        state.sort = actions.payload;
    },
    setFilters: (state, action) => {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
})


export const { setCategoryId, selectSort, setFilters } = filterSlice.actions

export default filterSlice.reducer