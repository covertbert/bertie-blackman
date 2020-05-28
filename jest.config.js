module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '.cache'],
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  coveragePathIgnorePatterns: ['/node_modules/', './test'],
}
