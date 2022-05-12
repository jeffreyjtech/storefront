import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';
import createStore from '../store';

describe('Testing cart and related features', () => {
  test('Products can be added to cart', async () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );

    let qtyDisplay = screen.queryByText(/qty/i);
    expect(qtyDisplay).not.toBeInTheDocument();

    const allButtons = await screen.findAllByTestId(/addtocart/i);
    const addToCartButton = allButtons[0];
    fireEvent.click(addToCartButton);

    qtyDisplay = screen.getByText(/qty/i);
    expect(qtyDisplay).toBeInTheDocument();
  });

  test('Stock level decreases when item is added to cart', async () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );

    let allDisplays = await screen.findAllByText(/In-stock/i)
    const initialStockDisplay = allDisplays[0];
    expect(initialStockDisplay).toHaveTextContent(/\d+/i);

    const addToCartButton = screen.getAllByTestId(/addtocart/i)[0];
    fireEvent.click(addToCartButton);

    allDisplays = await screen.findAllByText(/In-stock:/i);

    const finalStockDisplay = allDisplays[0];
    expect(finalStockDisplay).toHaveTextContent(/\d+/i);
    expect(finalStockDisplay).not.toStrictEqual(initialStockDisplay);
  });

  test('Cart quantity increases by 1 each time an item is added', async () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );

    let allButtons = await screen.findAllByTestId(/addtocart/i);
    let addToCartButton = allButtons[0];
    fireEvent.click(addToCartButton);
    
    let qtyDisplay = screen.getByText(/qty/i);
    expect(qtyDisplay).toHaveTextContent(/1/i);

    allButtons = await screen.findAllByTestId(/addtocart/i);
    addToCartButton = allButtons[0];
    fireEvent.click(addToCartButton);

    // I'm awaiting the last screen so the test suite hopefully closes after it's done doing API requests
    qtyDisplay = await screen.findByText(/qty/i);
    expect(qtyDisplay).toHaveTextContent(/2/i);
  });
});
