import React, { useEffect } from 'react';
import { HOCProvider } from '../../../provider';
import { StyledContainer } from '../component/Styled';
import { ShoppingCartList } from '../../product-list/view/ShoppingCartList';
import useShoppingCart from '../../../model/useShoppingCart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { IData } from 'src/types/shopping-cart.modules';

const ShoppingCart = ({ dataLoad, dataIn, dataOut }: IData) => {
  const { setProductList, setCurrencyCharacter, getDataOut } =
    useShoppingCart();

  useEffect(() => {
    setProductList(dataLoad.products);
    setCurrencyCharacter(dataIn.currency.toUpperCase());
  }, []);

  return (
    <StyledContainer sx={dataIn.containerStyle}>
      <ShoppingCartList dataOut={dataOut} />
    </StyledContainer>
  );
};

export default HOCProvider(ShoppingCart);
