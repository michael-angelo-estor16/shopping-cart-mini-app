import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  value: [];
}

const initialState: ProductState = {
  value: [],
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: any, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
