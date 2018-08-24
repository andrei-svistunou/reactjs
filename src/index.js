import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Error from './components/Error';
import App from './components/App';
import configureStore from './redux/configureStore';


const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);

render(
  <Error>
    <Provider store={store}>
      <App />
    </Provider>
  </Error>,
  document.getElementById('root')
);
