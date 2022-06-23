import { RootState } from "../store";

export const items = (state: RootState) => {state.productsSlice.items};
export const status = (state: RootState) => {state.productsSlice.status};