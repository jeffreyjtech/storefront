import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import productsReducer from './products';
import categoriesReducer from './categories';

let reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}
