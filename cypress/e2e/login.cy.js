import login from '../selectors/login.sel'
import header from '../selectors/header.sel'
import Login from "../PageObjects/LoginPage.js"

describe('Login', () => {
    // context is the same as describe
    context('login', () => {
        beforeEach(() => {
            // cy.visit('https://172.21.35.248:8181/ERP-war/Login.xhtml?continue=https://172.21.35.248:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml')
        })

        it('loginTest', () => {
            const loginObject = new Login()
            cy.fixture("loginTestData").then((data) => {
                data.forEach((userdata) => {
                    cy.visit('https://172.21.35.248:8181/ERP-war/Login.xhtml?continue=https://172.21.35.248:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml')
                    loginObject.setUserName(userdata.username)
                    loginObject.setPassword(userdata.password)
                    loginObject.clickLogin();
                    loginObject.verifyLogin(userdata.username, userdata.password, userdata.expectedResult);
                    cy.clearCookies()
                    cy.clearLocalStorage()
                })
            })
        })

        // it('can see error message when API responds with 500', () => {
        //     // const apiUrl = Cypress.env('apiUrl')
        //   const  apiUrl=`https://172.21.35.248:8181/ERP-war/Login.xhtml?continue=https://172.21.35.248:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml`
        //     cy.intercept('POST', apiUrl, {
        //         statusCode: 500,
        //         fixture: 'login_error'
        //     })
        //     cy.get(login.userNameField).type('random2@test.com')
        //     cy.get(login.passwordField).type('random_pass{enter}')
        //     cy.get(login.expectedError).should('be.visible')
        //         .and('contain', 'Error 500 - Internal server error')
        // })
    })


})
