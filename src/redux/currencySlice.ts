import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes } from '@mui/base';

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
      return {
        ...state,
        value: action.payload,
      };
      // state = { ...state, value: action.payload };
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
