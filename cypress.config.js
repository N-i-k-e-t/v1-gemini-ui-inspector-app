const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io/',  // Replace with your React server's URL
    video: true, // Optional: Record test videos
    defaultCommandTimeout: 6000, 
    // ...other configurations (see Cypress documentation)
  },
});