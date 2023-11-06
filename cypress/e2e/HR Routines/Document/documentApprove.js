
import "../../../support/auth.js"
// console.log(testData.url)
describe('documentApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentApprove.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("documentApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentApprove.xhtml")
        cy.wait(500)
        //Filter Criteria:
        cy.get('[id="frmDocumentapprove:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Approved List"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', '1').click({force: true});
        cy.wait(1000)
        cy.get('[id="frmDocumentapprove:txtDecsion_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approve"]').click()
        // cy.get('[id="frmDocumentRequest:txtCountry"]').type("Ethiopia")
        cy.wait(500)
        
        cy.get('[id="frmDocumentapprove:txtxreqdate"]').click("14/02/2016")

        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

