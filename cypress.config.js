const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true, 
  e2e: {
    baseUrl: 'https://serverest.dev',
  },
});
