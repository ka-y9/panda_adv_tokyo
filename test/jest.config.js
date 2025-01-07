```yaml
src:
  test:
    jest.config.js:
      content: |-
        module.exports = {
          preset: 'ts-jest',
          testEnvironment: 'jsdom',
          setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
          moduleNameMapper: {
            '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
            '^@/(.*)$': '<rootDir>/src/$1'
          },
          collectCoverageFrom: [
            'src/**/*.{ts,tsx}',
            '!src/**/*.d.ts',
            '