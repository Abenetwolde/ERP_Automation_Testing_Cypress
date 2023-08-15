import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
  cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
});

When("I enter valid credentials", () => {
  cy.get('[id="loginform:login-username"]').type("my-username");
  cy.get('[id="loginform:login-password"]').type("my-password");
});

And("I click the login button", () => {
  cy.get("#login-button").click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
