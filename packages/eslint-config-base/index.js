// @noflow

module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:eslint-plugin-promise/recommended',
    'airbnb-base',
  ],

  plugins: ['jest', 'unicorn', 'eslint-comments', 'promise'],

  rules: {
    // http://eslint.org/docs/rules/
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '?'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '?'],
          balanced: true,
        },
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/prefer-default-export': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/tree/c6a86c178757b152a4d1c76b3327fa958a749b51/docs/rules
    // This is handled by eslint-comments/no-unlimited-disable
    'unicorn/no-abusive-eslint-disable': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/tree/master/docs/rules
    'promise/prefer-await-to-then': 'error',
  },
};
