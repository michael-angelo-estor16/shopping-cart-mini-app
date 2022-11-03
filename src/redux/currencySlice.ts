import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICurrencyState {
  value: string;
}

const initialState: ICurrencyState = {
  value: '₱',
};
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state: ICurrencyState, action: PayloadAction<any>) => {
      state = { ...state, value: action.payload };
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
