module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testEnvironment": 'jsdom',
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "clearMocks": true,
  "resetMocks": true,
  "restoreMocks": true
}
