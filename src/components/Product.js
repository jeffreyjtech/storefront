import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';

export default function Product({ product }) {
  const { displayName, price, description, category, productId, stock } = product;

  const dispatch = useDispatch();

  return (
    <Card variant="outlined" data-testid={`product-${category}-${productId}`}>
      <CardHeader title={displayName} />
      <CardContent>
        <p>{description}</p>
        <span>{price}</span> <span style={{ float: 'right' }}>In-stock: {stock}</span>
        <hr />
        <Button
          onClick={() => {
            dispatch(addToCart(product));
          }}
          data-testid={`addtocart-${productId}`}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
