module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', './test', '/assets/'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@typings(.*)$': '<rootDir>/src/typings$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '.cache'],
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
}
