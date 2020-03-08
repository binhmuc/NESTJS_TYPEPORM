module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    'no-useless-constructor': 0,
    'no-empty-function': 0,
    'class-methods-use-this': 0,
    'max-classes-per-file': 0,
    'import/extensions': 0,
  },
};