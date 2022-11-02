import React, { useEffect } from 'react';
import { HOCProvider } from '../../../provider';
import { StyledContainer } from '../component/Styled';
import { ShoppingCartList } from '../../ProductList/view/ShoppingCartList';
import useShoppingCart from '../../../model/useShoppingCart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ShoppingCart = (props: any) => {
  const { dataLoad, dataIn, dataOut } = props;
  const { setProductList, setCurrencyCharacter, getDataOut } =
    useShoppingCart();

  useEffect(() => {
    setProductList(dataLoad.products);
    setCurrencyCharacter(dataIn.currency.toUpperCase());
  }, []);

  return (
    <StyledContainer sx={dataIn.containerStyle}>
      <ShoppingCartList />
    </StyledContainer>
  );
};

export default HOCProvider(ShoppingCart);
