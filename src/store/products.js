import axios from 'axios';

const initialState = {
  allProducts: [],
  displayMask: [],
};

export default function productsReducer(state = initialState, { type, payload }) {
  const { allProducts } = state;

  switch (type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        allProducts: payload.results,
        displayMask: payload.results.map((product) => product.name),
      };

    case 'FILTER':
      const newDisplayMask = allProducts.map((product) =>
        product.category === payload.category.name ? product.name : null
      );

      return { ...state, displayMask: newDisplayMask };

    case 'REMOVE_STOCK':
      // Find the product
      const index = allProducts.findIndex(
        (product) => product.productId === payload.product.productId
      );
      const updatedProducts = [...allProducts];
      updatedProducts[index].stock -= payload.quantity;
      return { ...state, allProducts: updatedProducts };

    // case 'GET_PRODUCTS':
    //   return {...state, allProducts: payload}

    case 'RESET':
      const resetDisplayMask = allProducts.map((product) => product.name);
      return { ...state, displayMask: resetDisplayMask };

    default:
      return state;
  }
}

// This is an action creator
export const filterProducts = (category) => {
  return category.name === 'all'
    ? { type: 'RESET' }
    : { type: 'FILTER', payload: { category } };
};

export const removeFromStock = (product, quantity) => {
  return {
    type: 'REMOVE_STOCK',
    payload: { product, quantity },
  };
};

/*
Get from an API
This action creator isn't a real action creator.
Instead it's an async function which will run as if it's real redux middleware
Thanks to thunk
*/

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  console.log(response.data);
  dispatch({
    type: 'GET_PRODUCTS',
    payload: response.data,
  });
};

export const resetProducts = () => {
  return {
    type: 'RESET',
  };
};
