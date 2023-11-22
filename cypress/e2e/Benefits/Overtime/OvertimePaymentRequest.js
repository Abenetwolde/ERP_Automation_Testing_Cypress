
import "../../../support/auth.js"
// console.log(testData.url)
describe('medicaCreditBillApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/OvertimePaymentRequest.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("first remove OT Factor A to add new ", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/overtime/OvertimePaymentRequest.xhtml")
        cy.wait(500)
        //PLuse icon
        cy.get('[id="frmSample:btnNew"]').click()
        cy.wait(500)
        cy.get('[id="frmRequest:yearselect_label"]').click()
        cy.wait(500)
        cy.get('[data-label="2015-2016"]').eq(0).click()
        cy.wait(500)
        //Department_label
        cy.get('[id="frmRequest:txtDepartment_label"]').click()
        cy.wait(500)
        cy.get('[data-label="INSA"]').eq(0).click()
        cy.wait(500)
        //generalledgerselect_label
        cy.get('[id="frmRequest:generalledgerselect_label"]').click()
        cy.wait(500)
        cy.get('[data-label="1500"]').eq(0).click()
        cy.wait(500)
        //monthselect label
        cy.get('[id="frmRequest:monthselect_label"]').click()
        cy.wait(500)
        cy.get('[data-label="September "]').eq(0).click()
        cy.wait(500)
        //fName_input
        cy.get('[id="frmRequest:fName_input"]').type("alma")
        cy.wait(2000)
        cy.get('[data-item-label="almaz"]').eq(0).click()
        cy.wait(500)
        //monthselect label
        cy.get('[id="frmRequest:txtrateee_label"]').click()
        cy.wait(500)
        cy.get('[data-label="OT Factor C"]').eq(0).click()
        cy.wait(500)
        cy.get('[id="frmRequest:txtfromDate"]').type("10/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        cy.get('[id="frmRequest:txttoDate"]').type("10/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        cy.wait(500)
        cy.get('[id="frmRequest:lateminute"]').type(12)
        cy.wait(500)
        cy.get('[id="frmRequest:dlgSubmit"]').click()
        cy.wait(500)
        cy.get('[id="frmRequest:txtApproved"]').type("11/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave1"]').click()

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



