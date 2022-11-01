import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const StyledContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  height: 'auto',
  flexDirection: 'row',
});

export const Column = styled(Box)({
  flex: 1,
  display: 'flex',

  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Thumbnail = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  padding: '10px',
  gap: '5px',
  textAlign: 'center',
  marginTop: '30px',
});

const List = ({ products, currency }: any) => {
  const displayProducts =
    products &&
    products.map((product: any) => (
      <StyledContainer borderBottom={'1px solid gray'}>
        <Column>
          <Thumbnail>
            <img src={product.image} alt="" height={'50%'} width={'50%'} />
            <Typography sx={{ width: '50%' }}>{product.title}</Typography>
          </Thumbnail>
        </Column>
        <Column>
          <Typography>{product.qty}</Typography>
        </Column>
        <Column>
          <Typography>
            {currency} {product.price}
          </Typography>
        </Column>
        <Column>
          <Typography>
            {currency}
            {product.total}
          </Typography>
        </Column>
        <Column></Column>
      </StyledContainer>
    ));

  return (
    <React.Fragment>
      <StyledContainer sx={{ height: '40px', borderBottom: '1px solid gray' }}>
        <Column>
          <Typography variant="h5" fontWeight={'bold'}>
            {'Product'}
          </Typography>
        </Column>
        <Column>
          <Typography variant="h5" fontWeight={'bold'}>
            {'Quantity'}
          </Typography>
        </Column>
        <Column>
          <Typography variant="h5" fontWeight={'bold'}>
            {'Price'}
          </Typography>
        </Column>
        <Column>
          <Typography variant="h5" fontWeight={'bold'}>
            {'Total'}
          </Typography>
        </Column>
        <Column></Column>
      </StyledContainer>
      {displayProducts}
    </React.Fragment>
  );
};

export default List;
