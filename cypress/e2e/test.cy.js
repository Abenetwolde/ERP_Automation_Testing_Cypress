// const fs = require('fs');
// const csv = require('fast-csv');
// // const csv = require('csvtojson');
//  const neatCSV = require('neat-csv');
// const { data } = require('cypress/types/jquery');
var testData 
describe('Login Regression Test', () => {
  // Read test data from CSV file
 
beforeEach(() => {
  cy.parseXlsx('cypress/fixtures/ab.xlsx').then(jsonData=>{
    testData=Cypress.$(jsonData[0].data)
   
  },
  )})
  
    it("`should login with username: ${test.username} and password: ${test.password}`", () => {
      // Visit login page
      cy.parseXlsx('cypress/fixtures/ab.xlsx').then(jsonData=>{
        const headers = jsonData[0].data[0];
  
        // Convert the data into an array of objects
        const data = jsonData[0].data.slice(1).map(row => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
        
        const length=Cypress.$(jsonData[0].data).length 
        data.forEach(row => {
          cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
          cy.get('[id="loginform:login-username"]').type(row.username)
          cy.wait(2000)
          cy.get('[id="loginform:login-password"]').type(row.password)
          cy.wait(2000)
          cy.get('[id="loginform:j_idt11"]').click()
        });
        console.log(length)
    
      console.log(testData)
   

      cy.url().should('include', '/dashboard');
    });
  });
})
