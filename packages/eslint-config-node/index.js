// @noflow

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'plugin:node/recommended',
    '@insidersbyte/eslint-config-base',
    '@insidersbyte/eslint-config-flow',
    'prettier',
    'prettier/flowtype',
  ],

  plugins: ['node'],

  env: {
    es6: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
  },

  rules: {},
};
