require('babel-core/register');
['.css', '.scss', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => { });
require('babel-polyfill');
require('./backend/server.js');
