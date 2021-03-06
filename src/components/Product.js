import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';
import { removeFromStock } from '../store/products';

export default function Product({ product }) {
  const { name, price, description, category, productId, inStock } = product;

  const dispatch = useDispatch();

  return (
    <Card variant="outlined" data-testid={`product-${category}-${productId}`}>
      <CardHeader title={name} />
      <CardContent>
        <p>{description}</p>
        <span>{price}</span> <span style={{ float: 'right' }}>In-stock: {inStock}</span>
        <hr />
        <Button
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(removeFromStock(product, 1));
          }}
          data-testid={`addtocart-${productId}`}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
