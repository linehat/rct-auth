"use strict";
const eslintrc = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["markdown", "react", "babel"],
  rules: {
    "react/jsx-uses-vars": "error",
    "react/forbid-prop-types": 0,
    "quote-props": 0,
    "no-script-url": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-filename-extension": 0,
    "func-names": 0,
    "prefer-const": 0,
    "arrow-body-style": 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "react/jsx-first-prop-new-line": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "max-len": 0,
    "newline-after-import": 0,
    "consistent-return": 0,
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0,
    "react/prefer-stateless-function": 0,
    "no-use-before-define": ["error", { functions: true, classes: true }],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: false }
    ]
  }
};
eslintrc.globals = {
  React: true,
  ReactDOM: true,
  mountNode: true
};
Object.assign(eslintrc.rules, {
  "no-console": 0,
  "eol-last": 0,
  "prefer-rest-params": 0,
  "react/no-multi-comp": 0,
  "react/prefer-es6-class": 0
});
module.exports = eslintrc;
