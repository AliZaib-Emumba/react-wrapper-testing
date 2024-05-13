module.exports = {
  // The root directory for Jest to search for tests
  roots: ['<rootDir>/src'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The file extensions that Jest will look for when searching for tests
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',

  // The module name mapper for resolving module dependencies
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // The transform configuration for transforming files before running tests
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!lit-element|lit-html|lit|@lit-labs/|@lit/)'],
};
