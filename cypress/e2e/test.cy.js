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
  
  // before( () => {
  //   cy.fixture('cypress/fixtures/test-data.csv').then(neatCSV).then(data=>{
  //   testData=data
  //   }).then(console.table);
  // })
  // let testData = [];
  // before(async () => {
  //   const csvData = fs.readFileSync('cypress/fixtures/test-data.csv');
  //   testData = await neatCsv(csvData);
  // });
  // console.log(testData);
  // Iterate over test data
 
  //  testData.forEach((test) => {
    it("`should login with username: ${test.username} and password: ${test.password}`", () => {
      // Visit login page
      // cy.parseXlsx('cypress/fixtures/ab.xlsx').then(jsonData=>{
      //   const row=Cypress.$(jsonData[0].data).length 
      //   console.log(row)
      //  cy.log(row)
      console.log(testData)
      cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
        cy.get('[id="loginform:login-username"]').type(test.username)
        cy.wait(2000)
        cy.get('[id="loginform:login-password"]').type(test.password)
        cy.wait(2000)
        cy.get('[id="loginform:j_idt11"]').click()

      cy.url().should('include', '/dashboard');
    });
  });
// })
