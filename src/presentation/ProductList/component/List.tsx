import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
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

const List = ({ products, currency, handleRemoveItem, subTotal }: any) => {
  const displayProducts =
    products.length > 0 ? (
      products.map((product: any) => (
        <StyledContainer borderBottom={'1px solid gray'}>
          <Column>
            <Thumbnail>
              <img src={product.image} alt="" height={'50%'} width={'50%'} />
              <Typography sx={{ width: '50%' }}>{product.title}</Typography>
            </Thumbnail>
          </Column>
          <Column>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={'20px'}
            >
              <Button variant={'contained'}>+</Button>
              <Typography>{product.qty}</Typography>
              <Button color="error" variant={'contained'}>
                {'-'}
              </Button>
            </Box>
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
          <Column>
            <Typography
              sx={{
                textDecoration: 'underline',
                color: 'red',
                cursor: 'pointer',
              }}
              onClick={() => handleRemoveItem(product.id)}
            >
              Remove
            </Typography>
          </Column>
        </StyledContainer>
      ))
    ) : (
      <StyledContainer
        sx={{
          height: '100px',
          borderBottom: '0px solid gray',
          margin: '100px',
        }}
      >
        <Typography variant="h5" fontWeight={'bold'}>
          The shopping cart is missing.
        </Typography>
      </StyledContainer>
    );

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
      <StyledContainer
        sx={{
          height: '50px',
          borderBottom: '0px solid gray',
          marginTop: '30px',
        }}
      >
        <Column></Column>
        <Column></Column>
        <Column>
          <Typography variant="h4" fontWeight={'bold'}>
            Subtotal:
          </Typography>
        </Column>
        <Column>
          <Typography variant="h4" fontWeight={'bold'}>
            {currency} {subTotal}
          </Typography>
        </Column>
        <Column></Column>
      </StyledContainer>
    </React.Fragment>
  );
};

export default List;
