import React, { CSSProperties } from 'react';
import { HOCProvider } from '../../provider';
import { StyledContainer } from '../Styled';
import { ShoppingCartList } from '../../presentation/view/ShoppingCartList';

const ShoppingCart = (props: any) => {
  const { dataLoad, dataIn, dataOut } = props;

  return (
    <StyledContainer sx={dataIn.containerStyle}>
      <ShoppingCartList />
    </StyledContainer>
  );
};

export default HOCProvider(ShoppingCart);
