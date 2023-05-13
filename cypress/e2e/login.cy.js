
import Login from "../PageObjects/LoginPage.js"
describe('Login', () => {
        it('DataDrivenloginTest', () => {
            const loginUrl = Cypress.env('loginUrl')
            cy.fixture("loginTestData").then((data)=>{
                data.loginTestData.forEach((userdata)=>{
                    const loginObject= new Login()
                    cy.visit(`${loginUrl}`)
                    loginObject.setUserName(userdata.username)
                    loginObject.setPassword(userdata.password)
                    loginObject.clickLogin();
                    loginObject.verifyLogin(userdata.username,userdata.password,userdata.expectedResults.expectedText);  
                    cy.clearCookies()
                    cy.clearLocalStorage()
                })
            })

        })

        
    })

    

