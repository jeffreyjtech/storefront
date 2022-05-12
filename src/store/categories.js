import axios from 'axios';

const allItemsCategory = {
  name: 'all',
  displayName: 'All',
  description: 'All categories',
};

const initialState = {
  activeCategory: allItemsCategory,
  categories: [
    {
      ...allItemsCategory,
    },
  ],
};

export default function categoriesReducer(state = initialState, { type, payload }) {
  const { categories } = state;

  switch (type) {
    case 'GET_CATEGORIES':
      const retrievedCategories = payload.results.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);

      return { ...state, categories: [allItemsCategory, ...retrievedCategories] };

    case 'ACTIVE':
      // action requires a payload object with property category
      return { ...state, activeCategory: payload.category };

    // case 'RESET':
    //   return state;

    default:
      return state;
  }
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  console.log(response.data);
  dispatch({
    type: 'GET_CATEGORIES',
    payload: response.data,
  });
};

export const setActiveCategory = (category) => {
  return {
    type: 'ACTIVE',
    payload: { category },
  };
};

// export const resetActiveCategory = () => {
//   return {
//     type: 'RESET',
//   };
// };
