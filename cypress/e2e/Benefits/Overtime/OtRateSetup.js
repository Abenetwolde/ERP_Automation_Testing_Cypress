
import "../../../support/auth.js"
// console.log(testData.url)
describe('medicaCreditBillApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/OtRateSetup.xhtmll", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("first remove OT Factor A to add new ", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/OtRateSetup.xhtml")
        cy.wait(500)
        // first remove OT Factor A to add new 
        cy.get('[id="frmRequest:txtotrate_label"]').click()
        cy.wait(500)
        cy.get('[data-label="OT Factor A"]').eq(0).click()
        cy.wait(500)
        cy.get('tbody tr').contains('td', 'OT Factor A ').eq(0).click()
        cy.wait(500)
        //
        cy.get('[id="frmRequest:rate12_label"]').click()
        cy.wait(500)
        cy.get('[data-label="OT Factor C"]').eq(0).click({force: true})
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave1"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        

    })
    it("OtRateSetup first test", () => {

        cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/OtRateSetup.xhtml", 'hiwot', 1234);
        cy.get('[id="frmSample:btnNew"]').click()
        cy.wait(500)
        cy.get('[id="frmRequest:rate12_label"]').click()
        cy.wait(500)
        cy.get('[data-label="OT Factor A"]').eq(1).click({force: true})
        cy.wait(500)
        cy.get('[id="frmRequest:ratevalu"]').clear().type(8011)
        cy.wait(500)
        cy.get('[id="frmRequest:txtworkingHour"]').type(12)
        cy.wait(500)
        cy.get('[id="frmRequest:desc"]').clear().type("description")
      
        cy.get('[id="frmRequest:btnSave1"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
       
    })
})



