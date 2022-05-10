const initialState = {
  activeCategory: '',
  categories: [
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
      if (categories.includes(payload.category)) {
        return { ...state, activeCategory: payload.category };
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
    payload: category,
  };
};

export const resetActiveCategory = () => {
  return {
    type: 'RESET',
  };
};
