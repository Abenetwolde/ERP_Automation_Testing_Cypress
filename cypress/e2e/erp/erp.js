// import {Before ,Given, When, Then } from "cypress-cucumber-preprocessor/steps";
// import "../../support/auth.js"
// // Given("I am on the login page", () => {
// //   cy.session("JSESSIONID", () => {
// //     // Check if the "JSESSIONID" cookie is present
// //     cy.getCookie("JSESSIONID").then((cookie) => {
// //         // If the cookie is not present, log in
// //         if (!cookie) {
// //             cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml", 'hiwot', 1234);
// //             //reusable login command
// //         }

// //     })
// // });
// //   // cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
// // });
// Before(()=>{
//     cy.session("JSESSIONID", () => {
//     // Check if the "JSESSIONID" cookie is present
//     cy.getCookie("JSESSIONID").then((cookie) => {
//         // If the cookie is not present, log in
//         if (!cookie) {
//             cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml", 'hiwot', 1234);
//             //reusable login command
//         }

//     })
// });
// })
// When("vist", () => {
//   cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
// });

// When("I enter valid credentials", () => {
//   cy.get('[id="loginform:login-username"]').type("my-username");
//   cy.get('[id="loginform:login-password"]').type("my-password");
// });

// When("I click the login button", () => {
//   cy.get("#login-button").click();
// });

// Then("I should be redirected to the dashboard", () => {
//   cy.url().should("include", "/dashboard");
// });
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
  cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml");
});

When("I enter valid credentials", () => {
  cy.get('[id="loginform:login-username"]').type("hiwot");
  cy.get('[id="loginform:login-password"]').type(1234);
});

When("I enter an incorrect password", () => {
  cy.get('[id="loginform:login-username"]').type("valid-username");
  cy.get('[id="loginform:login-password"]').type("incorrect-password");
});

When("I enter an incorrect username", () => {
  cy.get('[id="loginform:login-username"]').type("hdf");
  cy.get('[id="loginform:login-password"]').type(122);
});

When("I leave the username and password fields empty", () => {
  cy.get('[id="loginform:login-username"]').clear();
  cy.get('[id="loginform:login-password"]').clear();
});

When("I click the login button", () => {
  cy.get('[id="loginform:j_idt11"]').click();
});

Then("I should be redirected to the home page", () => {
  cy.url().should("include", "/home");
});

Then("I should see an error message", () => {
  cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "The username or password you entered is incorrect.The username or password you entered is incorrect.")
});
