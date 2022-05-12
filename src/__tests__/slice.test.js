import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categorySlice, { getCategories } from '../store/categories.slice';
import { waitFor } from '@testing-library/react';

let { set } = categorySlice.actions;

describe('Testing the redux slice', () => {
  const reducer = combineReducers({
    categories: categorySlice.reducer,
  });
  const store = configureStore({ reducer });

  test('Should be able to activate a category', () => {
    store.dispatch(set({ results: ['test'] }));
    let state = store.getState();
    expect(state.categories.categories.results[0]).toEqual('test');
  });

  test('Slice should fetch categories', async () => {
    await waitFor(() => store.dispatch(getCategories()));

    let { categories } = store.getState();

    expect(categories.categories.results.length).toBeGreaterThan(1);
  });
});
