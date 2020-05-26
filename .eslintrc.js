module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:cypress/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/strict',
  ],
  rules: {
    'react/prop-types': 0, // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-console': 1, // Avoid leaving console logs behind
    'prefer-template': 1, // Prefer template strings
    '@typescript-eslint/no-unused-vars': 0,
    'react/self-closing-comp': 1,
  },
  overrides: [
    {
      files: ['**/*.{test,tests}.{ts,tsx}'], // Feels unnecessary to enforce these rules in tests
      rules: {
        'react/display-name': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
}
