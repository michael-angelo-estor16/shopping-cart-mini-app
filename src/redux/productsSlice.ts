import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProducts {
  products: [];
}

const initialProducts: IProducts = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
