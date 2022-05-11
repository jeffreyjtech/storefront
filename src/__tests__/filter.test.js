import { screen, render, within, fireEvent } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';
import createStore from '../store';

test('Testing that product list can be filtered', () => {
  render(
    <Provider store={createStore()}>
      <App />
    </Provider>
  );

  const allProducts = screen.getAllByTestId(/product/i)

  const selectElem = screen.getByTestId(/categories-select/i);
  expect(selectElem).toHaveTextContent(/all/i)

  const selectButtonElem = within(selectElem).getByRole('button');
  fireEvent.mouseDown(selectButtonElem);

  const electronicsElem = screen.getByTestId(/category-electronics/i);
  fireEvent.click(electronicsElem);

  const filterProducts = screen.getAllByTestId(/product/i)

  expect(filterProducts.length).toBeLessThan(allProducts.length);
});
