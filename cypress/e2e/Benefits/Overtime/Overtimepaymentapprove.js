
import "../../../support/auth.js"
// console.log(testData.url)
describe('medicaCreditBillApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/Overtimepaymentapprove.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("first remove OT Factor A to add new ", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/Overtimepaymentapprove.xhtml")
        cy.wait(500)
        //Notification Icon
        cy.get('[id="frmRequest:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Requested List"]').eq(0).click()
        cy.wait(500)
        cy.get('tbody tr').contains('td', '2015-2016').click()
        //Approve
        cy.get('[id="frmRequest:drddecision_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approve"]').eq(0).click()
        cy.wait(500)
        //ApprovedDate
        cy.get('[id="frmRequest:calApprovedDate"]').type("10/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        //paymentstartdate
        cy.get('[id="frmRequest:paymentstartdate"]').type("10/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        cy.wait(500)
        //paymentenddate
        cy.get('[id="frmRequest:paymentenddate"]').type("11/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave"]').click()

        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */



    })
    // it("OtRateSetup first test", () => {

    //     cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/OtRateSetup.xhtml", 'hiwot', 1234);
    //     cy.get('[id="frmSample:btnNew"]').click()
    //     cy.wait(500)
    //     cy.get('[id="frmRequest:rate12_label"]').click()
    //     cy.wait(500)
    //     cy.get('[data-label="OT Factor A"]').eq(1).click({ force: true })
    //     cy.wait(500)
    //     cy.get('[id="frmRequest:ratevalu"]').clear().type(8011)
    //     cy.wait(500)
    //     cy.get('[id="frmRequest:txtworkingHour"]').type(12)
    //     cy.wait(500)
    //     cy.get('[id="frmRequest:desc"]').clear().type("description")

    //     cy.get('[id="frmRequest:btnSave1"]').click()
    //     cy.wait(500)
    //     cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

    // })
})



