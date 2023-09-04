
import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml");
  cy.wait(2000)
});
When('I enter {string} as the username', (username) => {
  cy.wait(2000)
  cy.get('[id="loginform:login-username"]').type(username);
});

When('I enter {string} as the password', (password) => {
  cy.get('[id="loginform:login-password"]').type(password);
});
When("I click the login button", () => {
  cy.get('[id="loginform:j_idt11"]').click();
});

Then("I should be redirected to the home page", () => {
  cy.get('body').then(($body) => {
    ($body.text().includes('hiwot'))

}
);
});

Then("I should see an error message", () => {
  cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "The username or password you entered is incorrect.The username or password you entered is incorrect.")
});
 