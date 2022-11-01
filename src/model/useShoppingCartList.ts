import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, removeProduct } from '../redux/productsSlice';
const useShoppingCartList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: any) => state.products.value.products
  );
  const subTotal = useSelector((state: any) => state.products.value.subTotal);
  const currency = useSelector((state: any) => state.currency.value);

  function getProducts() {
    setProducts(productList);
  }

  function removeOne(id: number) {
    dispatch(removeProduct(id));
  }

  return {
    getProducts,
    removeOne,
    currency,
    productList,
    subTotal,
  };
};

export default useShoppingCartList;
