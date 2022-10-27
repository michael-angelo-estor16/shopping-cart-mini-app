import React from 'react';
import { HOCProvider } from '../provider';

import { StyledContainer } from './Styled';

const ShoppingCart = (props: any) => {
  const { dataLoad, dataIn, dataOut } = props;

  return <StyledContainer sx={dataIn.styledContainer || {}}></StyledContainer>;
};

export default HOCProvider(ShoppingCart);
