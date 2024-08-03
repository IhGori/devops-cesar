const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoUploadOnPasses: true,
  screenshotOnRunFailure: true, 
  e2e: {
    baseUrl: 'https://serverest.dev',
  },
});
