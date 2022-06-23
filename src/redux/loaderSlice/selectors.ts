import { RootState } from "../store";

export const loader = (state: RootState) => {state.loaderSlice.loader}