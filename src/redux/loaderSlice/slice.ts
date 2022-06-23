import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loaderSliceType } from './types'

const initialState: loaderSliceType = {
    loader: true,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader(state, action: PayloadAction<boolean>) {
        state.loader = action.payload
    },
  },
})

export const { setLoader } = loaderSlice.actions

export default loaderSlice.reducer