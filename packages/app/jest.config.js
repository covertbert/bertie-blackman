module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '.cache'],
  moduleNameMapper: {
    '.+\\.(svg)$': '<rootDir>/__mocks__/svg.ts',
  },
}
