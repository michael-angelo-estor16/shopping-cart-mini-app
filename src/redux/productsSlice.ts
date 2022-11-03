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
      const listOfProducts = [...action.payload];

      const subTotalCounter = listOfProducts
        .reduce((total: number, object: any) => {
          return total + object.total;
        }, 0)
        .toFixed(2);

      //This will set the list in state and update the subtotal of all the item prices
      state.value = {
        ...state.value,
        products: listOfProducts,
        subTotal: subTotalCounter,
      };
    },
    removeProduct: (state: any, action: PayloadAction<any>) => {
      // Create a deep copy of a state
      const listOfFinalProducts = [...state.value.products].filter(
        (item: any) => item.id !== action.payload
      );

      const subTotalCounter = [...state.value.products]
        .reduce((total: number, object: any) => {
          return total + object.total;
        }, 0)
        .toFixed(2);

      //This will remove an item in the list and update the subtotal of all of the remaining item prices
      state.value = {
        ...state.value,
        products: listOfFinalProducts,
        subTotal: subTotalCounter,
      };
    },
    updateQuantity: (state: any, action: PayloadAction<any>) => {
      //Will update a specific items in the list
    },
    increaseQuantity: (state: any, action: PayloadAction<any>) => {
      const updatedQuantity: {}[] = [...state.value.products].map(
        (product: any) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty: product.qty + 1,
              total: product.price * (product.qty + 1),
            };
          }
          return product;
        }
      );

      const subTotalCounter: number = [...state.value.products]
        .reduce((total: number, object: any) => {
          return total + object.total;
        }, 0)
        .toFixed(2);

      // Will increase a speicific item quantity and update the subtotal of all of the remaining item prices
      state.value = {
        ...state.value,
        products: updatedQuantity,
        subTotal: subTotalCounter,
      };
    },
    decreaseQuantity: (state: any, action: PayloadAction<any>) => {
      const updatedQuantity = [...state.value.products].map((product: any) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty - 1,
            total: product.price * (product.qty - 1),
          };
        }
        return product;
      });

      const subTotalCounter = [...state.value.products]
        .reduce((total: number, object: any) => {
          return total + object.total;
        }, 0)
        .toFixed(2);

      // Will increase a speicific item quantity and update the subtotal of all of the remaining item prices
      state.value = {
        ...state.value,
        products: updatedQuantity,
        subTotal: subTotalCounter,
      };
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
