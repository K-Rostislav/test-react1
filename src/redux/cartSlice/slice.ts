import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productsFromLS } from '../../utils/productsFromLS';
import { productsCountFromLS } from '../../utils/prouctsCountFromLS';
import { CartSliceState, CartItem } from './types';


const initialState: CartSliceState = {
    count: productsCountFromLS(),
    items: productsFromLS(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem (state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if(findItem){
        findItem.count++;
        state.count++;
      } else {
        state.items.push({
          ...action.payload, 
          count: 1
        })
        state.count++;
      }
    },
    minus (state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if(findItem){
        state.count--;
        findItem.count--;
      }
      if(findItem?.count === 0) {
        state.items = state.items.filter(obj => obj.id !== action.payload.id);
      }
    },
    removeItem (state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if(findItem){
        state.items = state.items.filter(obj => obj.id !== action.payload.id);
        state.count = state.count - findItem.count;
      }
    }
  },
})

export const { addItem, minus, removeItem } = cartSlice.actions

export default cartSlice.reducer