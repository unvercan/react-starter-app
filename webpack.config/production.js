/* eslint-disable no-undef */

const webpackConfigMerge = require('webpack-merge');
const webpackCommonConfig = require('./common');

const webpackProductionConfig = {
  mode: 'production'
};

module.exports = webpackConfigMerge(
  webpackCommonConfig,
  webpackProductionConfig
);
