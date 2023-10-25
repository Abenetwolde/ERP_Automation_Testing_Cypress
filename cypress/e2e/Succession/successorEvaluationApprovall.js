// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../support/auth.js"
// console.log(testData.url)
describe('successorEvaluationApprovall testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/successorEvaluationApprovall.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("successorEvaluationApprovall Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/successorEvaluationApprovall.xhtml")
        cy.wait(500)
        //positionsearch_label
        cy.get('[id="frmMainUI:positionsearch_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Engineering"]').eq(0).click()
        cy.wait(500)
        // cy.get('[id="frmRequest:autoCompetency_input"]').click("new")
        cy.wait(2000)
        cy.get('table[role="grid"] tbody tr').contains('td', 'Engineering').click({force: true});
        cy.wait(2000)
        cy.get('[id="frmMainUI:approvalDate"]').type("14/08/2014").click()
        cy.get('[id="frmMainUI:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

