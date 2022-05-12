import { render, screen, fireEvent } from '@testing-library/react';
import Categories from './Categories';

import { Provider } from 'react-redux';
import createStore from '../store';

describe('Testing the Categories component', () => {
  test('Categories component can render', () => {
    render(
      <Provider store={createStore()}>
        <Categories />
      </Provider>
    );
  });

  it('Has a select element', () => {
    render(
      <Provider store={createStore()}>
        <Categories />
      </Provider>
    );

    let selectElem = screen.getByTestId(/categories-select/i);

    expect(selectElem).toBeInTheDocument();
  });

  it('Has menu-item elements', () => {
    render(
      <Provider store={createStore()}>
        <Categories />
      </Provider>
    );

    // When testing a MUI Select component, screening for and then clicking on the Select component itself does nothing
    // You need to find the button-role HTML element that lives inside the component
    let selectElem = screen.getByRole('button');
    fireEvent.mouseDown(selectElem);

    // the all category appears even if the categories are not being pulled from the API
    // convenient for testing
    let selectionElem = screen.getByTestId(/all/i);

    expect(selectionElem).toBeInTheDocument();
  });
});
