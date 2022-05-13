import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// Redux stuff
import { Provider } from 'react-redux';
import createStore from './store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
