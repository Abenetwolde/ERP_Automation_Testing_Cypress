
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
// import {
//   Given,
//   When,
//   And,
//   Then

// } from "@badeball/cypress-cucumber-preprocessor";
// import "../../../support/auth.js"
// beforeEach(() => {
//   // cy.visit('https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml');
//   cy.session("JSESSIONID", () => {
//         // Check if the "JSESSIONID" cookie is present
//         cy.getCookie("JSESSIONID").then((cookie) => {
//             // If the cookie is not present, log in
//             if (!cookie) {
//               cy.wait(2000)
//                 cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml", 'safdsf', 1234);
//                 //reusable login command
//             }
    
//         })
//     });
  
// });

// Given("I am on the login page", () => {
//   cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml");
//   cy.wait(2000)
// });
// When('I enter {string} as the username', (username) => {
//   cy.wait(2000)
//   cy.get('[id="loginform:login-username"]').type(username);
// });

// And('I enter {string} as the password', (password) => {
//   cy.get('[id="loginform:login-password"]').type(password);
// });
// And("I click the login button", () => {
//   cy.get('[id="loginform:j_idt11"]').click();
// });

// Then("I should be redirected to the home page", () => {
//   cy.get('body').then(($body) => {
//     ($body.text().includes('hiwot'))

// }
// );
// });

// Then("I should see an error message", () => {
//   cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "The username or password you entered is incorrect.The username or password you entered is incorrect.")
// });
Given('I am on the login page', () => {
  cy.visit("/");

 });
 When('I enter valid credentials', () => {
  cy.get('[id="loginform:login-username"]').type('hiwot');
  cy.get('[id="loginform:login-password"]').type(1234);
 });
 When('I enter incorrect credentials', () => {
  cy.get('[id="loginform:login-username"]').type('valid-username');
  cy.get('[id="loginform:login-username"]').type('incorrect-password');
 });
 And('I click the login button', () => {
  // Check if the form is valid before submitting it
  cy.get('[id="loginform:j_idt11"]').click();
 });
 Then('I should be redirected to the home page', () => {
  cy.get('body').then(($body) => {
    ($body.text().includes('hiwot'))

})
 });
 Then('I should see an error message', () => {
  cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "The username or password you entered is incorrect.The username or password you entered is incorrect.")
 });
 