/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {'.+\\.ts$': 'ts-jest'},
  testEnvironment: 'node'
};

module.exports = config;
