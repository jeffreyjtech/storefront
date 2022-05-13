import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    contents: [],
  },
  reducers: {
    add(state, action) {
      const { contents } = state;
      const { payload } = action;
      const index = contents.indexOf(payload.product);
      if (index > -1) {
        const newContents = [...contents];
        newContents[index].quantity++;
        return { ...state, contents: newContents };
      } else {
        payload.product.quantity = payload.quantity || 1;
        return { ...state, contents: [...contents, payload.product] };
      }
    },
  },
});

export default cartSlice;
