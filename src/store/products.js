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
  filteredProducts: [...allProducts],
};

export default function productsReducer(state = initialState, { type, payload }) {
  const { allProducts } = state;

  switch (type) {
    case 'FILTER':
      const modifiedState = {
        filteredProducts: allProducts.filter((product) => {
          return product.category === payload.category;
        }),
      };
      return { ...state, ...modifiedState };

    case 'REMOVE-STOCK':
      // Find the product
      const index = allProducts.indexOf(
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

export const resetProducts = () => {
  return {
    type: 'RESET',
  };
};
