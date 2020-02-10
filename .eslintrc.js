/* eslint-disable no-undef */

const eslintrc = {
  "root": true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  parser: "babel-eslint",
  rules: {
    semi: [1, "always"],
  },
  ignorePatterns: [
    "node_modules/"
  ],
};

module.exports = eslintrc;
