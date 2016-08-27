var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './entry.js',
  output:{
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by Hivan Du')
  ],
  resolve: {fallback: path.join(__dirname, 'node_modules')},
  resolveLoader: {fallback: path.join(__dirname, 'node_modules')}
}