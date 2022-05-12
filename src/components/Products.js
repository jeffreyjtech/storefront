import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import shortUUID from 'short-uuid';
import { Grid, Typography } from '@mui/material';

import { getProducts } from '../store/products';
import Product from './Product';
import Categories from './Categories';

function Products() {
  const displayMask = useSelector((state) => state.products.displayMask);
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  const productsList = allProducts.map((product, idx) =>
    displayMask[idx] ? (
      <Grid key={shortUUID.generate()} item xs={12} sm={6} md={3} lg={2}>
        <Product product={product} />
      </Grid>
    ) : null
  );

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
        {productsList}
      </Grid>
    </div>
  );
}

export default Products;
