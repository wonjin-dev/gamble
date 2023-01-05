const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@views/(.*)$': ['<rootDir>/src/@views/$1'],
    '^@components/(.*)$': ['<rootDir>/src/@views/@common/$1'],
    '^styles/(.*)$': ['<rootDir>/src/styles/$1'],
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
