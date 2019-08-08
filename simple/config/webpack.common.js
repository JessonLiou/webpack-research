'use strict';

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appDir = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDir, relativePath);

// const cssRegex = /\.css$/;
// const cssModuleRegex = /\.module\.css$/;
// const sassRegex = /\.(scss|sass)$/;
// const sassModuleRegex = /\.module\.(scss|sass)$/;

const srcDir = resolveApp('./src');
const distDir = resolveApp('./dist');

let entry = srcDir + '/index.js';
let outputPath = distDir;

module.exports = {
  entry: entry,
  output: {
    path: outputPath,
    publicPath: '',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  stats: {
    children: false,
    chunks: false,
    modules: false
  },
  resolve: {
    alias: {
      '@': `${srcDir}`
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        // oneOf: [
        //   {
        //     test: /\.(bmp|gif|jpe?g|png)$/,
        //     loader: 'url-loader',
        //     options: {
        //       limit: 4196,
        //       name: 'static/media/[name].[hash:8].[ext]',
        //     },
        //   }
        // ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: srcDir + '/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
