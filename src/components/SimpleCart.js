import { ShoppingBasket } from '@mui/icons-material';
import { List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import shortUUID from 'short-uuid';

export default function SimpleCart() {
  const contents = useSelector((state) => state.cart.contents);

  return (
    <List sx={{position: 'absolute', right:'100px', backgroundColor: 'white', border: 'gray 1px solid', padding: '1em'}}>
      
      Your cart:
      {contents.map((product) => (
        <ListItem key={shortUUID.generate()}>
          <ListItemText>
            {product.name} qty: {product.quantity}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
