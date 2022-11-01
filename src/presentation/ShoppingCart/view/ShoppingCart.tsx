import React, { useEffect } from 'react';
import { HOCProvider } from '../../../provider';
import { StyledContainer } from '../component/Styled';
import { ShoppingCartList } from '../../ProductList/view/ShoppingCartList';
import useShoppingCart from '../../../model/useShoppingCart';

const ShoppingCart = (props: any) => {
  const { dataLoad, dataIn } = props;
  const { setProductList } = useShoppingCart();

  useEffect(() => {
    setProductList(dataLoad.products);
  });

  return (
    <StyledContainer sx={dataIn.containerStyle}>
      <ShoppingCartList />
    </StyledContainer>
  );
};

export default HOCProvider(ShoppingCart);
