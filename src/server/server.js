import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { StaticRouter } from 'react-router-dom';
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState';
import serverRoutes from '../frontend/routes/serverRoutes';
import Layout from '../frontend/components/Layout';

dotenv.config();

const { ENV, PORT } = process.env;

const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    port: PORT,
    hot: true
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
};

const setResponse = (html) => {
  return (`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="assets/app.css" rel="stylesheet" type="text/css"></link>
          <title>Platzi Video | App</title>
      </head>
      <body>
          <div id="app">${html}</div>
          <script src="assets/app.js" type="text/javascript"></script>
      </body>
      </html>
  `);
}

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>
          {renderRoutes(serverRoutes)}
        </Layout>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`The server is running on PORT ${PORT}`);
});