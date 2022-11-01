import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/productsSlice';
import { setCurrency } from '../redux/currencySlice';
import getSymbolFromCurrency from 'currency-symbol-map';

const useShoppingCart = () => {
  const dispatch = useDispatch();

  function setProductList(list: []) {
    dispatch(setProducts(list));
  }

  function setCurrencyCharacter(currency: string) {
    setCurrency(getSymbolFromCurrency(currency));
  }

  return {
    setProductList,
    setCurrencyCharacter,
  };
};

export default useShoppingCart;
