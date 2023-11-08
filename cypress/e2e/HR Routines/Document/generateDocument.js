
import "../../../support/auth.js"
// console.log(testData.url)
describe('appealApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/generateDocument.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("appealApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/generateDocument.xhtml")
        cy.wait(500)
        //Filter Criteria:
        cy.get('[id="frmDocumentGenerate:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Approved List"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'feysa abebe alemu').click({force: true});
        cy.wait(500)
        //Action: 
        cy.get('[id="frmDocumentGenerate:txtstatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="generated"]').click()
        cy.wait(500)
        cy.get('[id="frmDocumentGenerate:txtxreqdate"]').type("17/02/2016")
        cy.wait(500)
        cy.get('[id="frmDocumentGenerate:btnmodify"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        //Filter Criteria:
        cy.get('[id="frmDocumentGenerate:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Generated List"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'feysa abebe alemu').click({force: true});
        cy.wait(500)
        //Action: 
        cy.get('[id="frmDocumentGenerate:txtstatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approved"]').click()
        cy.wait(500)
        cy.get('[id="frmDocumentGenerate:txtxreqdate"]').type("17/02/2016")
        cy.wait(500)
        cy.get('[id="frmDocumentGenerate:btnmodify"]').click()
    })
})


// })

