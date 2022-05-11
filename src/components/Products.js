// Redux stuff
import { connect } from 'react-redux';

import shortUUID from 'short-uuid';

import Product from './Product';
import { Grid, Typography } from '@mui/material';
import Categories from './Categories';

function Products({ allProducts, displayMask }) {
  return (
    <div className="products-display">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ display: 'inline' }}>
          Browse our wares
        </Typography>
        <span>
          <Categories />
        </span>
      </div>
      <Grid container spacing={2}>
        {allProducts.map((product, idx) =>
          displayMask[idx] ? (
            <Grid key={shortUUID.generate()} item xs={12} sm={6} md={3} lg={2}>
              <Product product={product} />
            </Grid>
          ) : null
        )}
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ products }) => {
  return { allProducts: products.allProducts, displayMask: products.displayMask };
};

export default connect(mapStateToProps)(Products);
