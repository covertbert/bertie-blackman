module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/strict',
  ],
  overrides: [
    {
      files: ['__mocks__/**'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
    {
      files: ['**/*.{test,tests}.{ts,tsx}', '__mocks__/**'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 0,
        'react/display-name': 0,
      },
    },
    {
      files: ['**/*.{test,tests}.{ts,tsx}', '**/*.tsx', '__mocks__/**'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': 1,
    'prefer-template': 1,
    'react/prop-types': 0,
    'react/self-closing-comp': 1,
    '@typescript-eslint/no-unused-vars': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
