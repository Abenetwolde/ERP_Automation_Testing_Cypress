// /* eslint-disable global-require */
// // eslint-disable-next-line import/no-extraneous-dependencies
// const { defineConfig } = require('cypress')
// const xlsx=require("node-xlsx").default
// const fs = require('fs');
// const path = require('path');
// const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// const cucumber = require('cypress-cucumber-preprocessor').default;

// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// async function setupNodeEvents(on, config) {


//     require('./cypress/plugins/index.js')(on, config)
//     require('cypress-mochawesome-reporter/plugin')(on);
//     // on("before:browser:launch", (browser = {}, launchOptions) => {
//     //     prepareAudit(launchOptions);
//     // });
//     // on("task", {
//     //     lighthouse: lighthouse(),
//     //     // pa11y: pa11y(console.log.bind(console)),
//     // })
//         //  on('file:preprocessor', cucumber())

//      on("task", { parseXlsx({filePath}){
//         return new Promise((resolve, reject)=>{
//             try {
//              const jsonData=xlsx.parse(fs.readFileSync(filePath))   
//              resolve(jsonData)
//             } catch (error) {
//                 reject(jsonData)
//             }
//         })
//      }})
//     // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//     await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
//     on(
//       "file:preprocessor",
//       createBundler({
//         plugins: [createEsbuildPlugin.default(config)],
//       })
//     );
//     allureWriter(on, config);
  
//     // Make sure to return the config object as it might have been modified by the plugin.
//     return config;
//   }

  

// module.exports = defineConfig({
//     // numTestsKeptInMemory: 15,
//     // defaultCommandTimeout: 15000,
//     // projectId: "5w29b1",
    
//     // env: {
//     //     baseUrl: 'https://172.21.35.248:8181',
//     //     docUrl: 'https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentRequest.xhtml',
//     //     loginUrl: 'https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentRequest.xhtml',
//     //     JobUrl: 'https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/jobRegistration.xhtml',
//     //     device: 'desktop',
//     //     email: 'test@test.com',
//     //     password: 'Cypress123'
//     // },
   
//     // retries: {
//     //     runMode: 1,
//     //     openMode: 0
//     // },
//     // userAgent:
//     //     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
//     // viewportHeight: 768,
//     // viewportWidth: 1266,
    
//     e2e: {
//         setupNodeEvents,
    
//         //  specPattern: "cypress/e2e/TrainingAndDevelopemnt/**/*.{feature,cy.js,js}",
//         specPattern: "cypress/e2e/features/*.feature",
//         // reporter: 'cypress-mochawesome-reporter',
//         // experimentalRunAllSpecs:true,
//         // We've imported your old cypress plugins here.
//         // You may want to clean this up later by importing these.
      
        
//         // function (on, config) {
//         //     require('./cypress/plugins/index.js')(on, config)
//         //     require('cypress-mochawesome-reporter/plugin')(on);
//         //     // on("before:browser:launch", (browser = {}, launchOptions) => {
//         //     //     prepareAudit(launchOptions);
//         //     // });
//         //     // on("task", {
//         //     //     lighthouse: lighthouse(),
//         //     //     // pa11y: pa11y(console.log.bind(console)),
//         //     // })
//         //          on('file:preprocessor', cucumber())

//         //      on("task", { parseXlsx({filePath}){
//         //         return new Promise((resolve, reject)=>{
//         //             try {
//         //              const jsonData=xlsx.parse(fs.readFileSync(filePath))   
//         //              resolve(jsonData)
//         //             } catch (error) {
//         //                 reject(jsonData)
//         //             }
//         //         })
//         //      }})
//         // },
//         baseUrl: "https://172.21.35.239:8181/ERP-war",
//         chromeWebSecurity: false,
//         env: {
//           allureReuseAfterSpec: true,
//         }, // this is your app
      
//     }
// })
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
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
     numTestsKeptInMemory: 15,
    defaultCommandTimeout: 15000,
    projectId: "5w29b1",
        retries: {
        runMode: 1,
        openMode: 0
    },
    userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
    viewportHeight: 768,
    viewportWidth: 1266,
    
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://172.21.35.239:8181/ERP-war/",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
