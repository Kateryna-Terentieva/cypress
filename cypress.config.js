const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      module.exports = {
        pageLoadTimeout: 120000, // Set to 120 seconds
        // other configurations...
      };
    },
  },
});
