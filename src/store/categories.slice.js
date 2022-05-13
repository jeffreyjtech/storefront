import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const allItemsCategory = {
  name: 'all',
  displayName: 'All',
  description: 'All categories',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategory: allItemsCategory,
    categories: [allItemsCategory],
  },
  reducers: {
    get(state, action) {
      const { payload } = action;
      const retrievedCategories = payload.results.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);

      return { ...state, categories: [allItemsCategory, ...retrievedCategories] };
    },
    setActive(state, action) {
      return { ...state, activeCategory: action.payload.category };
    },
  },
});

export const getCategories = () => async (dispatch, getState) => {
  const { get } = categoriesSlice.actions;
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(get(response.data));
};

export default categoriesSlice;
