module.exports = {
  parser: 'babel-eslint',
  globals: {
    global: true,
  },
  env: {
    browser: true,
    es6: true,
    mocha: true
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      pragma: 'h',
      version: '16.0',
    },
  },
  rules: {
    'max-len': [
      "error", {
        'code': 120,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ],
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
    'react/jsx-curly-spacing': [
      'error',
      {
        'when': 'always',
        'children': true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'brace-style': [
      'error',
      'stroustrup'
    ],
    'react/prop-types': 'off',
  }
};