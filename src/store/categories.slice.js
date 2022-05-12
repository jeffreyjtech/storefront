import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategory: '',
    categories: {},
  },
  reducers: {
    set(state, action) {
      return { ...state, categories: { ...action.payload } };
    },
    activate(state, action) {
      return { categories: state.categories, activeCategory: action.payload };
    },
  },
});

// This will look very similar to the non-toolkit thunkified action creator

export const getCategories = () => async (dispatch, getState) => {
  const { set } = categoriesSlice.actions;
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(set(response.data));
};

// What is on the slice object now?
// The reducer: categoriesSlice.reducer
// And the actions we defined: categoriesSlice.action.set & categoriesSlice.action.activate

export default categoriesSlice;