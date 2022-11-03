export type TProductList = IProduct[];

export type TIdPayload = {
  id: number;
};

export interface ICurrencyState {
  value: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  qty: number;
  image: string;
  total: number;
}

export interface IData {
  dataLoad: {
    products: TProductList;
  };
  dataIn: {
    currency: string;
    containerStyle: object;
  };
  dataOut: () => void;
}

export interface IProductState {
  value: {
    products: TProductList;
    subTotal: number;
  };
}
