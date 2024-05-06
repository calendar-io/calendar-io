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
    '!**/dist/**',
    '!**/out-tsc/**'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/out-tsc/'
  ],
  coverageProvider: 'v8',
  modulePathIgnorePatterns: [
    'src/index.*'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/out-tsc/'
  ],
  reporters: [ 'default', 'jest-junit' ],
  testResultsProcessor: 'jest-junit',
};