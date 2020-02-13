/* eslint-disable no-undef */

const jestConfig = {
  testMatch: ['.**/*.*(spec|test).{json,js,jsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules']
};

module.exports = jestConfig;
