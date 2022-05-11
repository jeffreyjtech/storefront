import productsReducer, { filterProducts } from './products';
import { legacy_createStore as createStore } from 'redux';

describe('Testing products store', () => {
  // We can use the createStore function from Redux to create our store in our testing environment
  const store = createStore(productsReducer);

  test('Product store initializes with correct initial state', () => {
    const state = store.getState(); // This function returns the current state of our store

    expect(state.allProducts).toBeTruthy();
    expect(state.displayMask).toBeTruthy();
    expect(state.allProducts.length).toStrictEqual(state.displayMask.length);
  });

  test('filterProducts action changes the displayMask collection', () => {
    // The store.dispatch function takes in a action creator, which we should be exporting from our store file (./product.js).
    store.dispatch(filterProducts('electronics'));

    const state = store.getState();

    const filteredProducts = state.allProducts.filter(
      (product, idx) => state.displayMask[idx]
    );
    expect(filteredProducts.every((product) => product.category === 'electronics')).toBe(
      true
    );
  });

  test('Filtering products with the "all" category resets the displayMask collection', () => {
    store.dispatch(filterProducts('all'));

    const state = store.getState();

    expect(state.displayMask.every((mask) => mask === true)).toBe(true);
  });
});
