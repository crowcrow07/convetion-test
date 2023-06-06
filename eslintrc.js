module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        doubleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 4,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
  plugins: ['@typescript-eslint', 'html'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
