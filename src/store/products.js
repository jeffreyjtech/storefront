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
  let index;
  let updatedProducts = [...allProducts];

  switch (type) {
    case 'FILTER':
      const newDisplayMask = allProducts.map((product) =>
        product.category === payload.category ? true : false
      );

      return { ...state, displayMask: newDisplayMask };

    case 'ADD-CART':
      // Find the product
      index = allProducts.findIndex((product) => product === payload.product);
      updatedProducts[index].stock--;
      return { ...state, allProducts: updatedProducts };

    case 'REMOVE-CART':
      // Find the product
      index = allProducts.findIndex((product) => product === payload.product);
      updatedProducts[index].stock++;
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

export const resetProducts = () => {
  return {
    type: 'RESET',
  };
};
