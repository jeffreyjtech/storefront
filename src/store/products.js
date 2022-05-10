const initialState = {
  allProducts: [
    {
      key: 'macbook',
      displayName: 'Macbook',
      description: 'An Apple computer',
      price: 999.99,
      category: 'electronics',
    },
    {
      key: 'iphone',
      displayName: 'iPhone',
      description: "The most addictive thing you'll ever own",
      price: 1199.99,
      category: 'electronics',
    },
    {
      key: 'banana',
      displayName: 'Banana',
      description: 'A yellow fruit',
      price: 0.99,
      category: 'food',
    },
    {
      key: 'apple',
      displayName: 'Apple',
      description: 'The fruit kind',
      price: 2.49,
      category: 'food',
    },
  ],
  filteredProducts: [],
};

export default function productsReducer(state = initialState, { type, payload }) {
  const { allProducts } = state;

  switch (type) {
    case 'FILTER':
      const modifiedState = {
        filteredProducts: allProducts.filter((product) => product.category === payload.category),
      };
      return { ...state, ...modifiedState };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}
