module.exports = {
    projects: [
        '<rootDir>/projects/my-lib',
        '<rootDir>/projects/my-lib-test'],
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
        "<rootDir>/setup-jest.ts"
    ],
    "transformIgnorePatterns": [
        "node_modules/(?!@ngrx|ngx-socket-io)" // List any packages here that error
    ],
    "transform": {
        "^.+\\.(ts|js|html)$": "ts-jest"
    },
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/",
        "<rootDir>/src/test.ts",
    ]
};