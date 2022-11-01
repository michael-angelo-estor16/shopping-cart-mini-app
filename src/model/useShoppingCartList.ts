import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const useShoppingCartList = () => {
  const productList = useSelector((state: any) => state.products.value);
  const [products, setProducts] = useState([]);

  function getProducts() {
    setProducts(productList);
  }

  return {
    products,
    getProducts,
  };
};

export default useShoppingCartList;
