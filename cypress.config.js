/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress')
const xlsx=require("node-xlsx").default
const fs = require('fs');
const path = require('path');
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
module.exports = defineConfig({
    numTestsKeptInMemory: 15,
    defaultCommandTimeout: 15000,
    projectId: "5w29b1",
    env: {
        baseUrl: 'https://172.21.35.248:8181',
        docUrl: 'https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentRequest.xhtml',
        loginUrl: 'https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentRequest.xhtml',
        JobUrl: 'https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/jobRegistration.xhtml',
        device: 'desktop',
        email: 'test@test.com',
        password: 'Cypress123'
    },
   
    retries: {
        runMode: 1,
        openMode: 0
    },
    userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
    viewportHeight: 768,
    viewportWidth: 1266,
    e2e: {
        reporter: 'cypress-mochawesome-reporter',
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents: function (on, config) {
            require('./cypress/plugins/index.js')(on, config)
            require('cypress-mochawesome-reporter/plugin')(on);
            // on("before:browser:launch", (browser = {}, launchOptions) => {
            //     prepareAudit(launchOptions);
            // });
            // on("task", {
            //     lighthouse: lighthouse(),
            //     // pa11y: pa11y(console.log.bind(console)),
            // })
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
        },
        baseUrl: "https://172.21.35.239:8181/ERP-war", // this is your app
      
    }
})
