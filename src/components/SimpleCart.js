import { RemoveCircle } from '@mui/icons-material';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import shortUUID from 'short-uuid';
import { removeFromCart } from '../store/cart';

export default function SimpleCart() {
  const contents = useSelector((state) => state.cart.contents);
  const dispatch = useDispatch();

  return (
    <List sx={{ position: 'absolute', right: '100px' }}>
      Your cart:
      {contents.map((product) => (
        <ListItem key={shortUUID.generate()}>
          <ListItemText>
            {product.displayName} <br /> qty: {product.quantity}
            <Button
              onClick={() => {
                dispatch(removeFromCart(product));
              }}
            >
              <RemoveCircle />
            </Button>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
