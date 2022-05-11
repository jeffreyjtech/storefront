import { Card, CardContent, CardHeader } from '@mui/material';

function Product({ product }) {
  const { displayName, price, description, category, productId } = product;

  return (
    <Card variant="outlined" data-testid={`product-${category}-${productId}`}>
      <CardHeader title={displayName} />
      <CardContent>
        <p>{description}</p>
        <p>{price}</p>
      </CardContent>
    </Card>
  );
}

export default Product;
