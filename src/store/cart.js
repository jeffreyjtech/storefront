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
        payload.product.quantity = payload.quantity || 1;
        return { ...state, contents: [...contents, payload.product] };
      }

    default:
      return state;
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: { product },
  };
};
