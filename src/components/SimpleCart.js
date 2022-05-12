import { List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import shortUUID from 'short-uuid';

export default function SimpleCart() {
  const contents = useSelector((state) => state.cart.contents);

  return (
    <List sx={{position: 'absolute', right:'100px'}}>
      Your cart:
      {contents.map((product) => (
        <ListItem key={shortUUID.generate()}>
          <ListItemText>
            {product.name} <br/> qty: {product.quantity}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
