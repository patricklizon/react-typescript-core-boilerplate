import { type Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": ["@swc/jest", { configFile: ".swcrc" }],
  },
  testRegex: "(/__tests__/.*|(\\.|/)spec)\\.(ts|tsx)?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  verbose: true,
  roots: ["<rootDir>/src/"],
  setupFiles: ["<rootDir>/jest.setup.env.ts"],
  moduleNameMapper: {
    "(svg)$": "<rootDir>/test/mocks/file-mock.ts",
    "(css)$": "<rootDir>/node_modules/identity-obj-proxy",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@test$": "<rootDir>/test/index.ts",
    "^@test/(.*)$": "<rootDir>/test/$1",
    "^root/(.*)$": "<rootDir>/$1",
  },
};

export default config;
