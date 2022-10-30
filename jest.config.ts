import type { Config } from "jest";

const config: Config = {
    collectCoverage: true,
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    testMatch: ["**/__tests__/**/*.+(ts)", "**/?(*.)+(spec|test).+(ts)"],
    transform: {
        "<regex_match_files": ["ts-jest", { useESM: true }],
    },
};

export default config;
