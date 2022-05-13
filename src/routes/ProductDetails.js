// import { useEffect } from "react";
import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../store/products';

export default function ProductDetails() {
  const params = useParams();

  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allProducts || allProducts.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, allProducts]);

  let product = allProducts.find((product) => product._id === params.productId);

  if (!product) return (<CircularProgress />)

  return (
    <Box sx={{ p: 2 }}>
      <h2>{product.name}</h2>
      <Typography variant='caption'>Category: {product.category}</Typography>
      <p>Price: {product.price}§</p>
      <p>In-stock: {product.inStock}</p>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>Reviews</AccordionSummary>
        <AccordionDetails><CircularProgress /></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>Related products</AccordionSummary>
        <AccordionDetails><CircularProgress /></AccordionDetails>
      </Accordion>
    </Box>
  );
}
