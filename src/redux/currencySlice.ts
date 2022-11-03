import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  value: string;
}

const initialState: ProductState = {
  value: '₱',
};
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state: any, action: PayloadAction<string>) => {
      state = { ...state, value: action.payload };
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
