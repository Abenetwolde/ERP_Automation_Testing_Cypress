// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../../support/auth.js"
// console.log(testData.url)
describe('probationResult testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/probationResult.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("probationResult First test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/probationResult.xhtml")
        cy.wait(500)
        //Criteria Name:
        cy.get('[id="frmProbationCriteria:srcCriteriaName_label"]').click()
        //clcik Load Request List
        cy.get('[data-label="Knowledge"]').click()

        cy.get('table[role="grid"] tbody tr').contains('td', 'Knowledge').click();
        cy.wait(500)
        //save button
        cy.get('[id="frmProbationCriteria:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

