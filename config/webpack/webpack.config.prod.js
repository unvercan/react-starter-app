/* eslint-disable no-undef */

const webpackConfigMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.common');

const webpackProdConfig = {
  mode: 'production'
};

module.exports = webpackConfigMerge(webpackCommonConfig, webpackProdConfig);
