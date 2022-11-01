import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productsSlice';
import { setCurrency } from '../redux/currencySlice';
import getSymbolFromCurrency from 'currency-symbol-map';

const useShoppingCart = () => {
  const dispatch = useDispatch();
  const dataOut = useSelector((state: any) => state);
  function setProductList(list: []) {
    dispatch(setProducts(list));
  }

  function setCurrencyCharacter(currency: string) {
    setCurrency(getSymbolFromCurrency(currency));
  }

  function getDataOut() {
    return dataOut;
  }

  return {
    setProductList,
    setCurrencyCharacter,
    getDataOut,
  };
};

export default useShoppingCart;
