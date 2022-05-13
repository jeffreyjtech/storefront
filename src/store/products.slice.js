import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    displayMask: [],
  },
  reducers: {
    get(state, action) {
      return {
        ...state,
        allProducts: action.payload.results,
        displayMask: action.payload.results.map((product) => product.name),
      };
    },
    filter(state, action) {
      if (action.payload.category.name === 'all') {
        return {
          ...state,
          displayMask: state.allProducts.map((product) => product.name),
        };
      }
      const newDisplayMask = state.allProducts.map((product) =>
        product.category === action.payload.category.name ? product.name : null
      );

      return { ...state, displayMask: newDisplayMask };
    },
    removeStock(state, action) {
      return {
        ...state,
        allProducts: state.allProducts.map((product) => {
          if (product.name === action.payload.product.name) {
            product.inStock -= action.payload.quantity;
          }
          return product;
        }),
      };
    },
  },
});

export const removeFromStock = (product, quantity) => async (dispatch, getState) => {
  const { removeStock } = productsSlice;
  axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, {
    ...product,
    inStock: product.inStock - quantity,
  });
  dispatch(removeStock(product, quantity));
};

export const getProducts = () => async (dispatch, getState) => {
  const { get } = productsSlice;
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(get(response.data));
};

export default productsSlice;
