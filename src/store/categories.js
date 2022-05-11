const allItemsCategory = {
  key: 'all',
  displayName: 'All',
  description: 'All categories',
};

const initialState = {
  activeCategory: allItemsCategory,
  categories: [
    {
      ...allItemsCategory,
    },
    {
      key: 'food',
      displayName: 'Food',
      description: 'Human fuel',
    },
    {
      key: 'electronics',
      displayName: 'Electronics',
      description: 'Nerd fuel',
    },
  ],
};

export default function categoriesReducer(state = initialState, { type, payload }) {
  const { categories } = state;

  switch (type) {
    case 'ACTIVE':
      // action requires a payload object with property category
      const selection = categories.find((category) => category.key === payload.category);
      if (selection) {
        return { ...state, activeCategory: selection };
      }
      return state;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export const setActiveCategory = (category) => {
  return {
    type: 'ACTIVE',
    payload: { category },
  };
};

export const resetActiveCategory = () => {
  return {
    type: 'RESET',
  };
};
