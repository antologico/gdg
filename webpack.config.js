var webpack = require('webpack');
var path = require('path');


var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();


const WebpackShellPlugin = require('webpack-shell-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    publicPath: 'http://0.0.0.0:8080/',
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
         test : /\.js?/,
         loaders: [ 'react-hot-loader', 'babel-loader' ],
         include : APP_DIR
      }
    ]
  }
};

module.exports = config;
