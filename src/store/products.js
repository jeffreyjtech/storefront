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
      price: 1.0,
      category: 'food',
    },
    {
      key: 'apple',
      displayName: 'Apple',
      description: 'The fruit kind',
      price: 2.5,
      category: 'food',
    },
  ],
};

export default function productsReducer(state = initialState, { type, payload }) {
  
  
}
