import React, { useEffect } from 'react';
import useShoppingCartList from '../../../model/useShoppingCartList';
import List from '../component/List';

export const ShoppingCartList = () => {
  const {
    currency,
    getProducts,
    updateProductQuantity,
    removeOne,
    productList,
    subTotal,
  } = useShoppingCartList();

  useEffect(() => {
    getProducts();
  }, [productList]);

  return (
    <List
      products={productList}
      currency={currency}
      subTotal={subTotal}
      handleRemoveItem={(id: any) => removeOne(id)}
      handleUpdateQuantity={(
        id: number,
        type: 'increase' | 'decrease' | 'update',
        quantity?: number
      ) => updateProductQuantity(id, type, quantity)}
    />
  );
};
