module.exports = {
  extends: ['airbnb-base'],

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
  },
};
