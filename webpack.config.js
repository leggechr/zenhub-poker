var path = require('path');
var webpack = require('webpack');

const SRC = path.resolve(__dirname, 'src');
const PUBLIC = path.resolve(__dirname, 'public');

module.exports = {
  entry: SRC + '/index.jsx',
  output: { path: PUBLIC, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        include: SRC,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
