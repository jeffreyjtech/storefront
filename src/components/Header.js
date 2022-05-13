import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import SimpleCart from './SimpleCart';

function Header() {
  return (
    <header>
      <Box sx={{ float: 'right' }}>
        <SimpleCart />
      </Box>
      <div className="nav-container" style={{ float: 'right' }}>
        <Button>
          <Link to="/cart" style={{ textDecorationLine: 'none', color: 'inherit' }}>
            Checkout
          </Link>
        </Button>
      </div>
      <Link to="/" style={{ textDecorationLine: 'none' }}>
        <Typography variant="h1" color="primary">
          Our store
        </Typography>
      </Link>
      <hr />
    </header>
  );
}

export default Header;
