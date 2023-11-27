

import "../../support/auth.d.ts"
// console.log(testData.url)
describe('medicaCreditBillApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/retirementRequest.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("terminationRequest first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/termination/retirementRequest.xhtml")
        cy.wait(500)
        //+ icon 
        cy.get('[id="frmToolBar:btnNew"]').click()
        cy.wait(500)
        //
        cy.get('[id="frmRetirement:srcEmployeeId_input"]').type("123")
        cy.wait(2000)
        cy.get('[data-item-value="123"]').eq(0).click({ force: true })
        cy.wait(500)
        //RetirementType_label
        cy.get('[id="frmRetirement:somRetirementType_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Medical Board Decision"]').eq(0).click()
        cy.wait(500)
        //RetirementDate
        cy.get('[id="frmRetirement:calRetirementDate"]').type("17/02/2017")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        //RetirementDate
        cy.get('[id="frmRetirement:txtProcessedDate"]').type("15/02/2017")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()

        cy.get('[id="frmRetirement:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })

})



