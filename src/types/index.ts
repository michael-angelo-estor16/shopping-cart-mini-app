type TDataLoad = {
  productName: string;
  productImage: string;
  price: string;
  initialQty: number;
};

type TDataIn = {
  styles: {
    containerStyle: CSSStyleSheet;
    perItemAlignment?: 'horizontal' | 'vertical';
  };
};

export interface IDataLoad {
  data: {
    products: TDataLoad[];
  };
}

export interface IProps {
  dataLoad: IDataLoad;
  dataIn: TDataIn;
}
