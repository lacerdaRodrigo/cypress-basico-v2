const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wy7rdt",
  e2e: {
    // "viewportHeight": 880,
    // "viewportWidth": 1280,
    video: true,
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
