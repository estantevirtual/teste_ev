/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    roots: ['<rootDir>/tests'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true
  }