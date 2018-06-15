import { render } from 'react-dom';
import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import Error from './components/Error';
import App from './components/App';
import configureStore from './redux/configureStore';


const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);

render(
  <Error>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Error>,
  document.getElementById('root')
);
