import React, { useEffect } from 'react';
import useShoppingCartList from '../../../model/useShoppingCartList';
import List from '../component/List';

export const ShoppingCartList = () => {
  const { getProducts, products } = useShoppingCartList();

  useEffect(() => {
    getProducts();
  }, []);

  return <List products={products} />;
};
