// jest.config.js
module.exports = {
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "vue"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
