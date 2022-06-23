import { RootState } from "../store"

export const items = (state: RootState) => {state.cartSlice.items}
export const count = (state: RootState) => {state.cartSlice.count}