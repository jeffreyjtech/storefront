import { Button, Card, CardContent, CardHeader } from '@mui/material';

function Product({ product }) {
  const { displayName, price, description, category, productId, stock } = product;

  return (
    <Card variant="outlined" data-testid={`product-${category}-${productId}`}>
      <CardHeader title={displayName} />
      <CardContent>
        <p>{description}</p>
        <span>{price}</span> <span style={{ float: 'right' }}>In-stock: {stock}</span>
        <hr />
        <Button>Add to cart</Button>
      </CardContent>
    </Card>
  );
}

export default Product;
