import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';
import createStore from '../store';

describe('Testing cart and related features', () => {
  test('Products can be added to cart', () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );

    let qtyDisplay = screen.queryByText(/qty/i);
    expect(qtyDisplay).not.toBeInTheDocument();

    const addToCartButton = screen.getAllByTestId(/addtocart/i)[0];
    fireEvent.click(addToCartButton);

    qtyDisplay = screen.getByText(/qty/i);
    expect(qtyDisplay).toBeInTheDocument();
  });

  test('Stock level decreases when item is added to cart', () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );

    const initialStockDisplay = screen.queryAllByText(/In-stock/i)[0];
    expect(initialStockDisplay).toHaveTextContent(/\d+/i);

    const addToCartButton = screen.getAllByTestId(/addtocart/i)[0];
    fireEvent.click(addToCartButton);

    const finalStockDisplay = screen.queryAllByText(/In-stock:/i)[0];
    expect(finalStockDisplay).toHaveTextContent(/\d+/i);
    expect(finalStockDisplay).not.toStrictEqual(initialStockDisplay);
  });

  test('Cart quantity increases by 1 each time an item is added', () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );

    let addToCartButton = screen.getAllByTestId(/addtocart/i)[0];
    fireEvent.click(addToCartButton);
    
    let qtyDisplay = screen.getByText(/qty/i);
    expect(qtyDisplay).toHaveTextContent(/1/i);

    addToCartButton = screen.getAllByTestId(/addtocart/i)[0];
    fireEvent.click(addToCartButton);

    qtyDisplay = screen.getByText(/qty/i);
    expect(qtyDisplay).toHaveTextContent(/2/i);
  });
});
