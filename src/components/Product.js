import { Info } from '@mui/icons-material';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cart';
import { removeFromStock } from '../store/products';

export default function Product({ product }) {
  const { name, price, description, category, _id, inStock } = product;

  const dispatch = useDispatch();

  return (
    <Card variant="outlined" data-testid={`product-${category}-${_id}`}>
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
          data-testid={`addtocart-${_id}`}
        >
          Add to cart
        </Button>
        <Button sx={{ float: 'right' }}>
          <Link to={`/products/${_id}`} style={{color:'inherit'}}>
            <Info />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
