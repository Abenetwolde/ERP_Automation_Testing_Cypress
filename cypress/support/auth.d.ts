import Login from "../PageObjects/LoginPage";
declare global {
    namespace Cypress {
      interface Chainable {
        loginCommand(url: string, username: string, password: number): void;
      }
    }
  }
Cypress.Commands.add('loginCommand', (url ,username, password) => {
    const loginObject = new Login()
    cy.visit(url)
    cy.wait(1000)
    loginObject.setUserName(username)
    cy.wait(1000)
    loginObject.setPassword(password)
    cy.wait(1000)
    loginObject.clickLogin();
    // cy.visit(url)
});
