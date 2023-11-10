
import "../../../support/auth.js"
// console.log(testData.url)
describe('bonusRequest first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/bonusPayment/bonusRequest.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("bonusRequest first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/bonusPayment/bonusRequest.xhtml")
        cy.wait(500)
        //Budget Year:
        cy.get('[id="frmRequest:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="2015"]').click()

       // given comment 
        cy.get('[id="frmRequest:txtComment"]').type("update comment ")
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

