import React from 'react';

const List = ({ products }: any) => {
  const displayProducts =
    products && products.map((product: any) => <div>{product.id}</div>);

  return <div>{displayProducts}</div>;
};

export default List;
