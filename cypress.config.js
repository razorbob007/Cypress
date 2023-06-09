const { defineConfig } = require("cypress");
// const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
// const { type } = require("cypress/types/jquery");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.tourradar.com',
    viewportHeight: 1080,
    viewportWidth: 1920
  }
});