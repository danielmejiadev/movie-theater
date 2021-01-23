module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error']
  }
};