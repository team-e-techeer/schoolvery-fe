module.exports = {
  preset: 'ts-jest',
  modulePaths: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(png|pdf|svg|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|style|less|sass|scss|svg)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', 'dist', 'build'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  snapshotSerializers: ['@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */],
};
