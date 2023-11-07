
import "../../../support/auth.js"
// console.log(testData.url)
describe('appealApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentRequest.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("appealApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/documentProvidingService/documentRequest.xhtml")
        cy.wait(500)
        //Filter Criteria:
        cy.get('[id="frmDocumentRequest:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Request List"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'insa-1111').click();
        cy.wait(500)
        cy.get('[id="frmDocumentRequest:txtxreqdate"]').type("14/02/2016")
        cy.wait(500)
        cy.get('[id="frmDocumentRequest:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

