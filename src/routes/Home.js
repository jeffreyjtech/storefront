import { Box } from '@mui/material';
import SimpleCart from '../components/SimpleCart';
import Products from '../components/Products';

export default function Home() {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ float: 'right' }}>
        <SimpleCart />
      </Box>
      <Products />
    </Box>
  );
}
