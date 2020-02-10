const eslintConfig = {
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
};

module.exports = eslintConfig;
