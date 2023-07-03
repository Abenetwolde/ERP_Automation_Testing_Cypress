import Login from "../PageObjects/LoginPage";

Cypress.Commands.add('loginCommand', (username, password) => {
    const loginObject = new Login()
    cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
    loginObject.setUserName(username)
    loginObject.setPassword(password)
    loginObject.clickLogin();
});