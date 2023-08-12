module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^data$|^value$|^id$|^object$|^options$',
      },
    ],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/multi-word-component-names': 'off',
    'no-param-reassign': 'off',
    'no-useless-return': 'off',
    'consistent-return': 'off',
    'no-var': 1,
    camelcase: 1,
    'no-nested-ternary': 1,
    'no-template-curly-in-string': 1,
    'no-self-compare': 1,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-new': 'off',
    'no-loss-of-precision': 'off',
    'nonblock-statement-body-position': 'error',
    semi: [1],
    'max-len': [
      'error',
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        code: 120,
      },
    ],
  },
};
