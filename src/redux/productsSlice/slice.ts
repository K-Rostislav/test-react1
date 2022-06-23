import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductItem, ProductsState, Status } from './types';

export const fetchProducts = createAsyncThunk<ProductItem[], Record<string, string>>('products/fetchProductsStatus', async (params) => {
    const {urlCategory, urlSelect, urlSearch} = params;
    const response = await axios.get(`https://62a09e0ea9866630f8138101.mockapi.io/products?${urlCategory}${urlSelect}${urlSearch}`)
    return response.data;
  }
)

const initialState: ProductsState = {
    items: [],
    status: Status.LOADING,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems (state, action) {
        state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductItem[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    })
  },
});

export const { setItems } = productsSlice.actions

export default productsSlice.reducer