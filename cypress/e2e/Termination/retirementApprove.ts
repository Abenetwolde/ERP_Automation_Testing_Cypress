
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('retirementApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/retirementApprove.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("retirementApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/retirementApprove.xhtml")
        cy.get('table[role="grid"] tbody tr').contains('td', '123').click();
        cy.wait(500)
        cy.get('[id="frmRetirement:drdDecsion_label"]').type("123")
        cy.wait(500)
        cy.get('[data-label="Approve"]').click()
        cy.wait(500)
        //termination date
        cy.get('[id="frmRetirement:txtProcessedDate"]').clear().type("05/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()

        cy.get('[id="frmRetirement:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



