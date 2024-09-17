const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://account.blip.ai",
  },
  fixturesFolder: false,
  video: false,
});
