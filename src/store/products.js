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
      if (payload.category === 'all') {
        return initialState;
      } else {
        const modifiedState = {
          filteredProducts: allProducts.filter((product) => {
            return product.category === payload.category;
          }),
        };
        return { ...state, ...modifiedState };
      }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// This is an action creator
export const filterProducts = (category) => {
  return {
    // And this is an action (I think)
    type: 'FILTER',
    payload: { category },
  };
};

export const resetProducts = () => {
  return {
    type: 'RESET',
  };
};
