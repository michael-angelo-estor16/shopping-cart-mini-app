import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  value: {
    products: [];
    subTotal: number;
  };
}

const initialState: ProductState = {
  value: {
    products: [],
    subTotal: 0.0,
  },
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: any, action: PayloadAction<any>) => {
      state.value.products = action.payload;
      state.value.subTotal = action.payload
        .reduce((total: number, object) => {
          return total + object.total;
        }, 0)
        .toFixed(2);
    },
    removeProduct: (state: any, action: PayloadAction<any>) => {
      state.value.products = state.value.products.filter(
        (item: any) => item.id !== action.payload
      );
      state.value.subTotal = state.value.products
        .reduce((total: number, object) => {
          return total + object.total;
        }, 0)
        .toFixed(2);
    },
  },
});

export const { setProducts, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
