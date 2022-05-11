const initialState = {
  contents: [],
};

export default function cartReducer(state = initialState, { type, payload }) {
  const { contents } = state;

  switch (type) {
    case 'ADD':
      // Find the product if it exists
      const index = contents.indexOf(payload.product);
      if (index > -1) {
        const newContents = [...contents];
        newContents[index].quantity++;
        return { ...state, contents: newContents };
      } else {
        return { ...state, contents: [...contents, payload.product] };
      }

    default:
      return state;
  }
}

export const addToCart = (product) => {
  const productInterfaceKeys = [
    'productId',
    'displayName',
    'description',
    'price',
    'stock',
    'category',
  ];
  if (Object.keys(product) === productInterfaceKeys) {
    return {
      type: 'ADD',
      payload: { product },
    };
  } else {
    return {
      type: null,
    };
  }
};
