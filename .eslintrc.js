module.exports = {
  root: true,
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  // add your custom rules here
  rules: {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 0,
    'indent': 0
  }
};
