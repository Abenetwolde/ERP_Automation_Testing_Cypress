// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../support/auth.js"
// console.log(testData.url)
describe('successionPlanningApproval testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/successionPlanningApproval.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("successionPlanningApproval Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/successionPlanningApproval.xhtml")
        cy.wait(500)
        //Filter Criteria:
        cy.get('[id="frmSuccessionplan:drdsJob_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Approved List"]').click()
        cy.wait(500)
    
        cy.wait(3000)
        cy.get('table[role="grid"] tbody tr').contains('td', 'BIFTU').click({force: true});
         //add
        cy.get('[id="frmSuccessionplan:drdstatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approve"]').click()

        cy.get('[id="frmSuccessionplan:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

