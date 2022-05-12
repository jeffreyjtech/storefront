import axios from "axios";

const allProducts = [
  {
    productId: 'macbook',
    displayName: 'Macbook',
    description: 'An Apple computer',
    price: 999.99,
    stock: 50,
    category: 'electronics',
  },
  {
    productId: 'iphone',
    displayName: 'iPhone',
    description: "The most addictive thing you'll ever own",
    price: 1199.99,
    stock: 100,
    category: 'electronics',
  },
  {
    productId: 'banana',
    displayName: 'Banana',
    description: 'A yellow fruit',
    price: 0.99,
    stock: 50,
    category: 'food',
  },
  {
    productId: 'apple',
    displayName: 'Apple',
    description: 'The fruit kind',
    price: 2.49,
    stock: 10,
    category: 'food',
  },
];

const initialState = {
  allProducts,
  displayMask: allProducts.map((product) => true),
};

export default function productsReducer(state = initialState, { type, payload }) {
  const { allProducts } = state;

  switch (type) {
    case 'FILTER':
      const newDisplayMask = allProducts.map((product) =>
        product.category === payload.category ? true : false
      );

      return { ...state, displayMask: newDisplayMask };

    case 'REMOVE-STOCK':
      // Find the product
      const index = allProducts.findIndex(
        (product) => product.productId === payload.product.productId
      );
      const updatedProducts = [...allProducts];
      updatedProducts[index].stock -= payload.quantity;
      return { ...state, allProducts: updatedProducts };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// This is an action creator
export const filterProducts = (category) => {
  return category === 'all'
    ? { type: 'RESET' }
    : { type: 'FILTER', payload: { category } };
};

export const removeFromStock = (product, quantity) => {
  return {
    type: 'REMOVE-STOCK',
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
  console.log(response);
  dispatch({
    type: 'GET_PRODUCTS',
    payload: response.data,
  })
}

export const resetProducts = () => {
  return {
    type: 'RESET',
  };
};
