module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  // Setup for mocking if needed later
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
