const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 95,
      lines: 95,
      statements: 95
    },
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/index.{js,jsx,ts,tsx}',
    '!**/*.mock.{js,jsx,ts,tsx}',
    '!**/*.module.{js,jsx,ts,tsx}',
    '!**/*dto.{js,jsx,ts,tsx}',
    '!**/*main.{js,jsx,ts,tsx}',
  ],
};
