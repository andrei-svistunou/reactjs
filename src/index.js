import { render } from 'react-dom';
import React from 'react';
import Error from './components/Error';
import App from './components/App';

render(
  <Error>
    <App />
  </Error>,
  document.getElementById('root')
);
