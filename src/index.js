import { hydrate } from 'react-dom';
import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import Error from './components/Error';
import App from './components/App';
import configStore from './redux/configureStore';


const initialState = window.REDUX_INITIAL_STATE || {};
window.REDUX_INITIAL_STATE = null;

const store = configStore(initialState);

hydrate(
  <Error>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Error>,
  document.getElementById('root')
);
