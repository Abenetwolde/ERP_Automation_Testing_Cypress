import Login from "../PageObjects/LoginPage";

Cypress.Commands.add('loginCommand', (url ,username, password) => {
    const loginObject = new Login()
    cy.visit(url)
    cy.wait(1000)
    loginObject.setUserName(username)
    cy.wait(1000)
    loginObject.setPassword(password)
    cy.wait(1000)
    loginObject.clickLogin();
    cy.visit(url)
});