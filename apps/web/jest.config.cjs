/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/jest.styleMock.cjs",
    "^@pips90/ui$": "<rootDir>/../../packages/ui/src",
  },
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "<rootDir>/tsconfig.jest.json",
      },
    ],
  },
};
