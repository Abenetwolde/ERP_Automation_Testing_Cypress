// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../support/auth.js"
// console.log(testData.url)
describe('developmentPlan testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/developmentPlan.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("developmentPlan Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/developmentPlan.xhtml")
        cy.wait(500)
        //Filter Criteria:
        cy.get('[id="frmRequest:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Active List"]').click()
        cy.wait(500)
    
        cy.wait(3000)
        cy.get('table[role="grid"] tbody tr').contains('td', 'Active').click({force: true});
         //add
        cy.get('[id="frmRequest:btnAdd"]').click()
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

