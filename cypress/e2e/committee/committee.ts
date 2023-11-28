
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('retirementApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/committee/committee.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("retirementApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/committee/committee.xhtml")
        cy.wait(500)

        cy.get('[id="frmCommittee:drdSearchBy_label"]').click()
        cy.wait(500)
        cy.get('[data-label="committee name"]').click()
        cy.wait(500)
        cy.get('[id="frmCommittee:txtCommitteeName"]').type("m")
        cy.wait(500)
        cy.get('[id="frmCommittee:btnSearch"]').click()
        cy.wait(500)
             cy.get('table[role="grid"] tbody tr').contains('td', '1').click();
                cy.wait(500)
        cy.get('[id="frmCommittee:btnSavea"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })

})



