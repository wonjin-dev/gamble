const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@styles/(.*)$': ['<rootDir>/src/styles/$1'],
    '^@constants/(.*)$': ['<rootDir>/src/constants/$1'],
    '^@views/(.*)$': ['<rootDir>/src/views/$1'],
    '^@components/(.*)$': ['<rootDir>/src/views/$1common/components/*'],
    '^@hooks/(.*)$': ['<rootDir>/src/hooks/$1'],
    '^@utils/(.*)$': ['<rootDir>/src/utils/$1'],
    '^@store/(.*)$': ['<rootDir>/src/store/$1'],
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
