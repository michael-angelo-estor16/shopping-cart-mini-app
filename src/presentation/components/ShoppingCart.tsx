import React from 'react';
import { Box } from '@mui/material';
import { IProps } from '../../types';
import { Header } from './Header';
import { Product } from './Product';

export const ShoppingCart = ({ dataLoad, dataIn }: IProps) => {
  const { containerStyle } = dataIn.styles;
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const label = 'Shopping Bag';

  const defaultStyle: React.CSSProperties = {
    minWidth: '300px',
    minHeight: '500px',
    padding: '20px',
    border: 'solid 2px #bbbb ',
  };

  return (
    <Box sx={defaultStyle}>
      <Header label={label} />
      {items.map((item) => (
        <Product />
      ))}
    </Box>
  );
};
