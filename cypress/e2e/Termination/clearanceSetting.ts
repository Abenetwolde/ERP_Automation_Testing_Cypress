
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('retirementApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/clearanceSetting.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("test select first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/clearanceSetting.xhtml")
        cy.wait(500)
        cy.get('[id="frmClearanceSetting:tblDepartmentList:0:j_idt72"]').click()
        cy.wait(500)
        cy.get('[id="frmClearanceSetting:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
    it("test unselect first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/clearanceSetting.xhtml")
        cy.wait(500)
        cy.get('[id="frmClearanceSetting:tblDepartmentList:0:j_idt72"]').click()
        cy.wait(500)
        cy.get('[id="frmClearanceSetting:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



