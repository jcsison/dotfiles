export default {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: 'off',
    'no-unused-vars': 0,
    'prettier/prettier': 'error',
    'space-before-function-paren': 0
  }
}
