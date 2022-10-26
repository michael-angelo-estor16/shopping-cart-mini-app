import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: 'skyblue',
  minHeight: '100px',
}));

export const Product = () => {
  const data = {
    image:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    productName: 'Camera',
    productDescription: 'White',
    price: '59.00',
    qty: '1',
  };
  return (
    <Wrapper sx={{ padding: '10px', marginTop: '10px' }}>
      <Box flex={3}>
        <img
          src={data.image}
          style={{ width: '100px', height: '100px' }}
          alt={''}
        />
      </Box>
      <Box flex={2}>Content</Box>
      <Box flex={2}>Pricing</Box>
    </Wrapper>
  );
};
