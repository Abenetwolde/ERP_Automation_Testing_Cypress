

import "../../support/auth.d.ts"
// console.log(testData.url)
describe('medicaCreditBillApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/terminationRequest.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("terminationRequest first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/terminationRequest.xhtml")
        cy.wait(500)
        //+ icon 
        cy.get('[id="frmToolBar:btnNew"]').click()
        cy.wait(500)
        //
        cy.get('[id="frmCompReq:txtEmpID_input"]').type("mel")
        cy.wait(2000)
        cy.get('[data-item-value="melakuTraining"]').eq(0).click({ force: true })
        cy.wait(500)
        cy.get('[id="frmCompReq:btnSave1"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })

})



