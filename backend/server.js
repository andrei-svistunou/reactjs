import { StaticRouter } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import express from 'express';
import cors from 'cors';
import configStore from '../src/redux/configureStore';
import App from '../src/components/App';

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8090' : '/';

function renderHTML(componentHTML, initialState) {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
  />
          <title>neflixroulett</title>
          <script type="application/javascript">
            window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)};
          </script>
      </head>
      <body>
        <div id="root">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/bundle.js"></script>
      </body>
    </html>
  `;
}

const app = express();
const PORT = 3003;

app.use(cors());
app.use((req, res) => {
  const context = {};
  const store = configStore();
  const state = store.getState();

  const componentHTML = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(renderHTML(componentHTML, state));
});
// app.get('/', (req, res) => res.json({ msg: 'Express sends message!' }));

app.listen(PORT, () => console.log('Example app listening on port 3003!'));
