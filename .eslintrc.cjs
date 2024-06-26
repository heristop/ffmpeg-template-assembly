module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:prettier/recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/dot-notation': 'error',
    'eol-last': 'error',
    'prettier/prettier': 'error',
  },
};
