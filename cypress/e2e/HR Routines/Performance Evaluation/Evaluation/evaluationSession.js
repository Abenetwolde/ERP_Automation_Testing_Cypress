// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../../support/auth.js"
// console.log(testData.url)
describe('evaluationSession testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/evaluationSession.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("evaluationSession test 1", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/evaluationSession.xhtml")
        cy.wait(500)
        //Criteria Name:
        cy.get('[id="frmSearch:somBudgetYear_label"]').click()
        //clcik Load Request List
        cy.get('[data-label="2016"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', '2016').click();
        cy.wait(500)
        //update
        cy.get('[id="frmEvaluationSession:btnSave"]').click()

        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

