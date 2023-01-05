const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@styles/(.*)$': ['<rootDir>/src/styles/$1'],
    '^@views/(.*)$': ['<rootDir>/src/views/$1'],
    '^@components/(.*)$': ['<rootDir>/src/views/$1common/components/*'],
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
