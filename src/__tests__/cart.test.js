import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';
import createStore from '../store';

test('Products can be added to cart', () => {
  render(
    <Provider store={createStore()}>
      <App />
    </Provider>
  );

  let qtyDisplay = screen.queryByText(/qty/i)
  expect(qtyDisplay).not.toBeInTheDocument();

  const addToCartButton = screen.getAllByTestId(/addtocart/i)[0]
  fireEvent.click(addToCartButton);

  qtyDisplay = screen.getByText(/qty/i)
  expect(qtyDisplay).toBeInTheDocument();
});

test('Stock level decreases when item is added to cart', () => {
  render(
    <Provider store={createStore()}>
      <App />
    </Provider>
  );

  let stockDisplay = screen.queryByText(/50/i)
  expect(stockDisplay).toBeInTheDocument();

  const addToCartButton = screen.getAllByTestId(/addtocart/i)[0]
  fireEvent.click(addToCartButton);

  stockDisplay = screen.getByText(/49/i)
  expect(stockDisplay).toBeInTheDocument();
});
