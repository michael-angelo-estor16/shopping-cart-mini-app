# Shopping Cart Mini App

Sample Shopping Cart List Mini-app.

[![repository](https://img.shields.io/badge/repo-github-orange)](https://github.com/michael-angelo-estor16/shopping-cart-mini-app)

## Mini App

- Shopping Cart Mini App - [![status](https://img.shields.io/badge/DONE-green)](#)

## Changelogs

```sh
1.2.3 Updated docs
1.2.2 Added data load on mini app
1.2.1 Added types to the payloads
1.2.0 Updated redux immutability
1.1.1 Updated index files
1.1.0 Project dependency setup
1.0.0 Project initialization
```

## Testing the component

```sh
npm run storybook
```

## Installation

```sh
npm i shopping-cart-mini-app-serino-v2
```

## Usage

```sh
import React from 'react'
import {ShoppingCart} from 'shopping-cart-mini-app-serino-v2'

const App = ()=>{

  const dataLoad = {
     products: [
                {
                  id: 1,
                  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                  price: 109.95,
                  qty: 1,
                  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                  total: 109.5,
                },
                {
                  id: 2,
                  title: 'Mens Casual Premium Slim Fit T-Shirts ',
                  price: 22.3,
                  qty: 1,
                  image:
                    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
                  total: 22.3,
                },
     ]
  }

  const dataIn = {
      currency: 'PHP',
      containerStyle: {
        minWidth: '500px',

        minHeight: '500px',
        height: 'auto',
      },
  }

  const dataOut = (outputData:any) => console.log(outputData)


  return(
    <React.Fragment>
      <ShoppingCart dataLoad={dataLoad} dataIn={dataIn} dataOut={dataOut}/>
    </React.Fragment>)



}

export default App;

```

## Types

```sh
{
  dataLoad: {
    products: {
      id: number;
      title: string;
      price: number;
      qty: number;
      image: string;
      total: number;
      }[],
  },
  dataIn: {
    currency: string,
    containerStyle: CSSProperties,
  },
  dataOut: (arg0: any) => void,
}

```

## Peer Dependecies

```sh
"react": "^17.0.2",
"react-dom": "^17.0.2"
```
