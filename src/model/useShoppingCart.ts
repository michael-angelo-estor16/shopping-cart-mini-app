import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productsSlice';
import { setCurrency } from '../redux/currencySlice';
import getSymbolFromCurrency from 'currency-symbol-map';
import { TProductList } from 'src/types/shopping-cart.modules';
const useShoppingCart = () => {
  const dispatch = useDispatch();
  const dataOut = useSelector((state: any) => state);
  function setProductList(list: TProductList) {
    dispatch(setProducts(list));
  }

  function setCurrencyCharacter(currency: string) {
    const currencySymbol: string | undefined = getSymbolFromCurrency(currency);
    dispatch(setCurrency(currencySymbol));
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
