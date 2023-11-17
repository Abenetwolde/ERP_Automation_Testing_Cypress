
import "../../../support/auth.js"
// console.log(testData.url)
describe('insurancePaymentApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/insurancePaymentApprove.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("insurancePaymentApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/insurancePaymentApprove.xhtml")
        cy.wait(500)
        //notification
        cy.get('[id="frmSample:lblNotf"]').click()
        cy.wait(500)
        cy.get('[data-item-label="melese"]').click()
        
        cy.wait(500)

        //Add button
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

    })
})


