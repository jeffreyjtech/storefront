import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from './middleware/thunk';

import productsReducer from './products';
import categoriesReducer from './categories';
import cartReducer from './cart';

let reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
