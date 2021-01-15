module.exports = {
  parser: '@babel/eslint-parser', // Specifies the ESLint parser
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
