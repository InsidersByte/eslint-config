module.expots = {
  plugins: ['flowtype'],

  parser: 'babel-eslint',

  rules: {
    'flowtype/array-style-complex-type': [2, 'verbose'],
    'flowtype/array-style-simple-type': [2, 'verbose'],
    'flowtype/newline-after-flow-annotation': [2, 'always'],
    'flowtype/no-dupe-keys': 2,
    // TODO: Enable this?
    // "flowtype/no-flow-fix-me-comments": 1,
    // TODO: Enable this?
    // "flowtype/no-mutable-array: 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-unused-expressions': 2,
    // TODO: Enable this
    // "flowtype/no-weak-types: 2,
    'flowtype/require-exact-type': [2, 'always'],
    // TODO: Enable this
    // "flowtype/require-parameter-type": 2,
    // TODO: Enable this
    // "flowtype/require-return-type": 2,
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      {
        annotationStyle: 'line',
      },
    ],
    // TODO: Enable this?
    // "flowtype/require-parameter-type: 2,
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
