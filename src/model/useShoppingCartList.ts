import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setProducts,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
} from '../redux/productsSlice';

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

  function updateProductQuantity(
    id: number,
    type: 'increase' | 'decrease' | 'update',
    amount?: number
  ) {
    const targetItem: any = productList.find(
      (product: any) => product.id === id
    );
    console.log(type);
    if (type === 'increase') {
      // run increase dispatcher
      const payload = { id: targetItem.id };
      dispatch(increaseQuantity(payload));
    } else if (type === 'decrease') {
      // run decrease dispatcher if the quantity is not equal to one
      if (targetItem.qty > 1) {
        const payload = { id: targetItem.id };
        dispatch(decreaseQuantity(payload));
      }
    } else {
      // run the update quantity dispatcher
      const payload = { id: targetItem.id, qty: amount };
      dispatch(updateQuantity(payload));
    }
  }

  return {
    getProducts,
    removeOne,
    currency,
    productList,
    subTotal,
    updateProductQuantity,
  };
};

export default useShoppingCartList;
