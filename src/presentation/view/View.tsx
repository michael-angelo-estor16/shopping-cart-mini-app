import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import React from 'react';
import { IProps } from '../../types';
import { ShoppingCart } from '../components/ShoppingCart';

const theme = createTheme();

export const View = ({ dataLoad, dataIn }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <ShoppingCart dataLoad={dataLoad} dataIn={dataIn} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
};
