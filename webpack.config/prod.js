/* eslint-disable no-undef */

const webpackConfigMerge = require('webpack-merge');
const webpackCommonConfig = require('./common');

const webpackProdConfig = {
  mode: 'production'
};

module.exports = webpackConfigMerge(webpackCommonConfig, webpackProdConfig);
