// Redux stuff
import { connect } from 'react-redux';

import shortUUID from 'short-uuid';

import Product from './Product';
import { Grid } from '@mui/material';

function Products({ filteredProducts, filterProducts, resetProducts }) {
  return (
    <>
      <p>Browse our wares</p>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid key={shortUUID.generate()} item xs={12} sm={6} md={3} lg={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const mapStateToProps = ({ products }) => {
  return { filteredProducts: products.filteredProducts };
};

export default connect(mapStateToProps)(Products);
