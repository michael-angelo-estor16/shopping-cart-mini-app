import { styled } from '@mui/material/styles';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box, Typography } from '@mui/material';
import { CSSProperties } from '@mui/material/styles/createMixins';

interface IHeaderProps {
  label?: string;
  icon?: string;
  styles?: CSSProperties;
}

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  background: 'white',
}));

export const Header = ({
  label = 'Shopping Cart',
  icon = '',
  styles = {},
}: IHeaderProps) => {
  return (
    <Wrapper>
      {icon || <ShoppingBagIcon />}
      <Typography variant="h5">{label}</Typography>
    </Wrapper>
  );
};
