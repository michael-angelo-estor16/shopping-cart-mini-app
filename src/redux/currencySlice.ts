import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICurrencyState } from 'src/types/shopping-cart.modules';

const initialState: ICurrencyState = {
  value: '₱',
};
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state: ICurrencyState, action: PayloadAction<string>) => {
      state = { ...state, value: action.payload };
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
