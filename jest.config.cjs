module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  preset: "ts-jest",
  testTimeout: 10000,
  injectGlobals: true,
  roots: [
    "./src/",
    "./tests/"
  ],
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ]
}