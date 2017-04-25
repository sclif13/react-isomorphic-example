process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';
// process.env.PUBLIC_URL = '../public';
require('dotenv').config({ silent: true });

var fs = require('fs');

var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-core/register')(config);
require('../src/server.js');