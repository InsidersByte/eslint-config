// @noflow

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'airbnb',
    '@insidersbyte/eslint-config-base',
    '@insidersbyte/eslint-config-flow',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
  },
};
