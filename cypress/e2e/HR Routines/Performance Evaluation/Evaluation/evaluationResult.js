// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../../support/auth.js"
// console.log(testData.url)
describe('evaluationResult testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/evaluationResult.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("evaluationResult test 1", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/evaluationResult.xhtml")
        cy.wait(500)
        //id 
        cy.get('[id="frmSearch:srcEmpId"]').type("id")

        //srcEmpName
        cy.get('[id="frmSearch:srcEmpName"]').type("srcEmpName")
      //search button
        cy.get('[id="frmSearch:btnSearch"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

