
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('retirementApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/exitInterview.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("retirementApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/exitInterview.xhtml")
        cy.get('[id="frmExitInterview:srcEmpName"]').type("a")
        cy.wait(500)
        cy.get('[id="frmExitInterview:btnSearch"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'Alemu Tadese Biru').click();
        cy.wait(500)
        cy.get('[id="frmExitInterview:txtReasonforLeave_label"]').click()
        cy.wait(500)
        cy.get('[data-label="To begin own business"]').click()
        cy.wait(500)
        cy.get('[id="frmExitInterview:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



