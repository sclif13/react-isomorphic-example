import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routes from './routes';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfiguration from '../config/webpack.config.dev';
import express from 'express';

const compiler = webpack(webpackConfiguration);
const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  quiet: false,
  stats: 'minimal'
}));

app.get('*', (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
      children={routes}
    >
    </StaticRouter>
  )

  if (context.status === 404) {
    res.status(404);
  }
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!doctype html>
      <div id="root">${html}</div>
    `)
    res.end()
  }
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
})