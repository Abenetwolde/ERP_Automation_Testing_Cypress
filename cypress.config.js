const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const xlsx=require("node-xlsx").default
const fs = require('fs');
async function setupNodeEvents(on, config) {
  on("task", { parseXlsx({filePath}){
    return new Promise((resolve, reject)=>{
        try {
         const jsonData=xlsx.parse(fs.readFileSync(filePath))   
         resolve(jsonData)
        } catch (error) {
            reject(jsonData)
        }
    })
 }})
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.{feature,cy.js,js}",
    baseUrl: "https://www.saucedemo.com",

    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
