/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.*',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/dist/**'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  coverageProvider: 'v8',
  modulePathIgnorePatterns: [
    'src/index.*'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  reporters: [ 'default', 'jest-junit' ],
  testResultsProcessor: 'jest-junit',
};