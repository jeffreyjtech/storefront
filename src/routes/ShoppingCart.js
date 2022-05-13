import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  Input,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useSelector } from 'react-redux';
import shortUUID from 'short-uuid';

export default function ShoppingCart() {
  const contents = useSelector((state) => state.cart.contents);

  const totalPrice = contents.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <Box sx={{ p: 2 }}>
      <List>
        Your cart:
        {contents.map((product) => (
          <ListItem key={shortUUID.generate()}>
            <ListItemText>
              {product.name}
              <br />
              Quantity: {product.quantity}
              <br />
              Price: {product.price * product.quantity}§
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <p>Total Price: {totalPrice}§</p>
      <FormGroup>
        <FormLabel>Billing Address</FormLabel>
        <Input />
      </FormGroup>
      <FormGroup>
        <FormLabel>Credit Card Number</FormLabel>
        <Input />
      </FormGroup>
      <Button>Order Now</Button>
    </Box>
  );
}
