const express = require('express');
const { join } = require('path');
const { APP_BASE_HREF } = require('@angular/common');
const { CommonEngine } = require('@angular/ssr');
const bootstrap = require('../dist/my-portfolio/server/server.mjs');

const app = express();
const DIST_FOLDER = join(process.cwd(), 'dist');
const APP_NAME = 'my-portfolio';

const commonEngine = new CommonEngine();

// Server static files
app.get('*.*', express.static(join(DIST_FOLDER, APP_NAME, 'browser')));

// All regular routes use the SSR engine
app.get('*', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: join(DIST_FOLDER, APP_NAME, 'browser', 'indexFile.html'),
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: join(DIST_FOLDER, APP_NAME, 'browser'),
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

module.exports = app;
