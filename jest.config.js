const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
};
