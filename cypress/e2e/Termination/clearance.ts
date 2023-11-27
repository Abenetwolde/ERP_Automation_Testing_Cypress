
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('retirementApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/clearance.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("retirementApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/clearance.xhtml")
        // cy.get('table[role="grid"] tbody tr').contains('td', '123').click();
        cy.wait(500)
        cy.get('[id="frmClearance:drdRetirement_label"]').click()
        cy.wait(500)
        cy.get('[data-label="rr ee"]').eq(0).click({force: true})
        cy.wait(3000)
        //termination date
        cy.get('[id="frmClearance:tblDepartmentList:0:j_idt113"]').click()
        cy.wait(500)
        cy.get('[id="frmClearance:drdStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Cleared"]').click()
        cy.wait(500)
        cy.get('[id="frmClearance:btnAdd"]').click()
        cy.wait(500)
        // cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



