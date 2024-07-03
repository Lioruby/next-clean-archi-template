export default {
  collectCoverage: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testRegex: "^((?!int|e2e).)*.test.tsx?$", // Inclure les fichiers .tsx
  coverageDirectory: "../coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  rootDir: "src",
  moduleNameMapper: {
    "^@root/(.*)$": "<rootDir>/$1",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/in-memory*",
    ".*\\.factory\\.ts$",
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@testing-library/react)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
