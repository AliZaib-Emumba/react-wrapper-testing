# Getting Started with the proj

This is a simple project showcasing and experimenting the implementation of test cases on React components derived from lit components using React wrappers

Make sure to install the packages using `npm i`.

## Key findings

### jest config

Make sure that you add following inside the jest config file

`transform: {
    '^.+\\.jsx?$': 'babel-jest'
}`

`transformIgnorePatterns: ['node_modules/(?!lit-element|lit-html|lit|@lit-labs/|@lit/)'],`

and make sure the testEnvironment is jsdom,
`testEnvironment: 'jsdom',`

These properties help in transforming jsx files (and ignoring some patterns) correctly using babel jest into formats that are supported by Node.js.

### babel config

I added `.babelrc` file before but for some reason it was not running. Upon further research I was recommended to use `babel.config.js` file instead.
Make sure to add the following presets to make sure the jsx is readable by the test runner.

`module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
`

Make sure the `jest.config.js` is connected in the package json file.
