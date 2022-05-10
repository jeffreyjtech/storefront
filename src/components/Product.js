import { Card, CardContent, CardHeader } from '@mui/material';

function Product({ product }) {
  const { displayName, price, description } = product;

  return (
    <Card variant="outlined">
      <CardHeader title={displayName} />
      <CardContent>
        <p>{description}</p>
        <p>{price}</p>
      </CardContent>
    </Card>
  );
}

export default Product;
