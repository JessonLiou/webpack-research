'use strict'

const webpackMerge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = webpackMerge(common, {
  mode: 'production',
  bail: true,
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
    ]
  }
});
