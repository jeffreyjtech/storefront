const initialState = {
  contents: [],
};

export default function cartReducer(state = initialState, { type, payload }) {
  const { contents } = state;
  let index;

  switch (type) {
    case 'ADD-CART':
      // Find the product if it exists
      
      index = contents.indexOf(payload.product);
      if (index > -1) {
        const newContents = [...contents];
        newContents[index].quantity++;
        return { ...state, contents: newContents };
      } else {
        payload.product.quantity = 1;
        return { ...state, contents: [...contents, payload.product] };
      }

    case 'REMOVE-CART':
      index = contents.indexOf(payload.product);
      const newContents = [...contents];
      if (index > -1) {
        if (newContents[index].quantity > 1) {
          // If the item at index is greater than 1, decrement by 1
          newContents[index].quantity--;
        } else {
          // Else, if item is 1 or less, remove from the array altogether
          newContents.splice(index, 1);
        }
      }
      return { ...state, contents: newContents };

    default:
      return state;
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD-CART',
    payload: { product },
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE-CART',
    payload: { product },
  };
};
