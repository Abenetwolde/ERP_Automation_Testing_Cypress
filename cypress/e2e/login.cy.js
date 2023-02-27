
import Login from "../PageObjects/LoginPage.js"
describe('Login', () => {
    // context is the same as describe
    context('login', () => {
        beforeEach(() => {
            // visit ('/login') -> will visit baseUrl + /login
            // baseUrl is set in config - cypress.json file
           // cy.visit('https://172.21.35.248:8181/ERP-war/Login.xhtml?continue=https://172.21.35.248:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml')
        })

        it('loginTest', () => {
            const loginObject= new Login()
            cy.fixture("loginTestData").then((data)=>{
                data.forEach((userdata)=>{
                    cy.visit('https://172.21.35.248:8181/ERP-war/Login.xhtml?continue=https://172.21.35.248:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml')
                    loginObject.setUserName(userdata.username)
                    loginObject.setPassword(userdata.password)
                    loginObject.clickLogin();
                    loginObject.verifyLogin(userdata.username,userdata.password,userdata.expectedResult);  
                    cy.clearCookies()
                    cy.clearLocalStorage()
                })
            })

        })

        // it('can see error message when API responds with 500', () => {
        //     // const apiUrl = Cypress.env('apiUrl')
        //   const  apiUrl=`http://angularjs.realworld.io/#`
        //     cy.intercept('POST', `${apiUrl}/users/login`, {
        //         statusCode: 500,
        //         fixture: 'login_error'
        //     })
        //     cy.get(login.emailField).type('random2@test.com')
        //     cy.get(login.passwordField).type('random_pass{enter}')
        //     cy.get(login.errorMessages).should('be.visible')
        //         .and('contain', 'Error 500 - Internal server error')
        // })
    })

    // context('successful', () => {
    //     beforeEach(() => {
    //         // we need a new user
    //         // cy.register().then((response) => {
    //         //     cy.wrap(response.email).as('email')
    //         // })
    //         // log out - clear cookies and localstorage
    //         cy.clearCookies()
    //         cy.clearLocalStorage()
    //         cy.visit('/login')
    //     })

    //     it('can log in', function () {
    //         const password = Cypress.env('password')

    //         cy.get(login.emailField).type(this.email)
    //         cy.get(login.passwordField).type(password)
    //         cy.get(login.signInButton).click()
    //         cy.get(header.settingsLink).should('be.visible')
    //     })
    // })
    // context('successful', () => {
    //     beforeEach(() => {
    //         // we need a new user
    //         cy.register().then((response) => {
    //             cy.wrap(response.email).as('email')
    //         })
    //         // log out - clear cookies and localstorage
    //         cy.clearCookies()
    //         cy.clearLocalStorage()
    //         cy.visit('/login')
    //     })

    //     it('can log in', function () {
    //         const password = Cypress.env('password')

    //         cy.get(login.emailField).type(this.email)
    //         cy.get(login.passwordField).type(password)
    //         cy.get(login.signInButton).click()
    //         cy.get(header.settingsLink).should('be.visible')
    //     })
    // })
})
