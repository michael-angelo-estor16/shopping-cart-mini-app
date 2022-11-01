import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/productsSlice';

const useShoppingCart = () => {
  const dispatch = useDispatch();

  function setProductList(list: []) {
    dispatch(setProducts(list));
  }

  return {
    setProductList,
  };
};

export default useShoppingCart;
