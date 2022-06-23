import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { searchSliceType } from './types';

const initialState: searchSliceType = {
    search: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
        state.search = action.payload;
    }
  },
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer