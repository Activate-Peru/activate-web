module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: `./tsconfig.json`
  },
  extends: ['airbnb-typescript'],
  rules: {
    'no-console': 1, // means warning, 2 means error
    'prettier/prettier': 1 // means error
  }
};
