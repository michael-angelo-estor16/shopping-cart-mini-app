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
      //This will set the list in state
      state.value.products = action.payload;
      //This will update the subtotal of all the item prices
      state.value.subTotal = action.payload
        .reduce((total: number, object) => {
          return total + object.total;
        }, 0)
        .toFixed(2);
    },
    removeProduct: (state: any, action: PayloadAction<any>) => {
      //This will remove an item in the list
      state.value.products = state.value.products.filter(
        (item: any) => item.id !== action.payload
      );
      //This will update the subtotal of all of the remaining item prices
      state.value.subTotal = state.value.products
        .reduce((total: number, object) => {
          return total + object.total;
        }, 0)
        .toFixed(2);
    },
    updateQuantity: (state: any, action: PayloadAction<any>) => {
      //Will update a specific items in the list
    },
    increaseQuantity: (state: any, action: PayloadAction<any>) => {
      // Will increase a speicific item quantity
      state.value.products = state.value.products.map((product: any) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty + 1,
            total: product.price * (product.qty + 1),
          };
        }
        return product;
      });
      //This will update the subtotal of all of the remaining item prices
      state.value.subTotal = state.value.products
        .reduce((total: number, object) => {
          return total + object.total;
        }, 0)
        .toFixed(2);
    },
    decreaseQuantity: (state: any, action: PayloadAction<any>) => {
      // Will decrease a speicific item quantity
      state.value.products = state.value.products.map((product: any) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty - 1,
            total: product.price * (product.qty - 1),
          };
        }
        return product;
      });
      //This will update the subtotal of all of the remaining item prices
      state.value.subTotal = state.value.products
        .reduce((total: number, object) => {
          return total + object.total;
        }, 0)
        .toFixed(2);
    },
  },
});

export const {
  setProducts,
  removeProduct,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
} = productsSlice.actions;

export default productsSlice.reducer;
