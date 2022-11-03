# Shopping Cart Mini App

Sample Shopping Cart List Mini-app.

[![repository](https://img.shields.io/badge/repo-github-orange)](https://github.com/michael-angelo-estor16/shopping-cart-mini-app)

## Mini App

- Shopping Cart Mini App - [![status](https://img.shields.io/badge/DONE-green)](#)

## Changelogs

```sh
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
npm i shopping-cart-mini-app
```

## Usage

```sh
import {ShoppingCart} from 'shopping-cart-mini-app'

<ShoppingCart dataLoad={dataLoad} dataIn={dataIn} dataOut={dataOut}/>
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
