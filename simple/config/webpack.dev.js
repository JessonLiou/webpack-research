'use strict'

const webpackMerge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = webpackMerge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: '/',
    inline: true,
    host: '0.0.0.0',
    port: 81,
    historyApiFallback: {
      index: '/index.html'
    },
    stats: {
      children: false
    },
    disableHostCheck: true,
  }
});