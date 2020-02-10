/* eslint-disable no-undef */

const path = require('path');
const webpackConfigMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.common');

const webpackDevConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    host: '127.0.0.1',
    port: 3535,
    compress: true,
    open: true,
    hot: true
  }
};

module.exports = webpackConfigMerge(webpackCommonConfig, webpackDevConfig);
