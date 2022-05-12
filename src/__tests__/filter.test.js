import { screen, render, within, fireEvent } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';
import createStore from '../store';

test('Testing that product list can be filtered', async () => {
  render(
    <Provider store={createStore()}>
      <App />
    </Provider>
  );

  const allProducts = await screen.findAllByTestId(/product/i)

  const selectElem = screen.getByTestId(/categories-select/i);
  expect(selectElem).toHaveTextContent(/all/i)

  const selectButtonElem = await within(selectElem).findByRole('button');
  fireEvent.mouseDown(selectButtonElem);

  const allElem = await screen.findByTestId(/category-electronics/i);
  fireEvent.click(allElem);

  // I'm awaiting the last screen so the test suite hopefully closes after it's done doing API requests
  const filterProducts = await screen.findAllByTestId(/product/i)
  expect(filterProducts.length).toBeLessThan(allProducts.length);
});
