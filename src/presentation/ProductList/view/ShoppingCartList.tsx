import React, { useEffect } from 'react';
import useShoppingCartList from '../../../model/useShoppingCartList';
import List from '../component/List';

export const ShoppingCartList = () => {
  const { getProducts, currency, removeOne, productList, subTotal } =
    useShoppingCartList();

  useEffect(() => {
    getProducts();
    console.log(productList);
  }, [productList]);

  return (
    <List
      products={productList}
      currency={currency}
      subTotal={subTotal}
      handleRemoveItem={(id: any) => removeOne(id)}
    />
  );
};
