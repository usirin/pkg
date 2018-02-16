module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'standard'],
  plugins: ['class-property', 'standard', 'promise', 'react'],
  rules: {
    'no-return-assign': 0,
    'max-len': [2, 80, 2],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', 'never'],
    'class-property/class-property-semicolon': ['error', 'never'],
  },
}
