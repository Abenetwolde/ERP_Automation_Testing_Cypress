
import "../../../support/auth.js"
// console.log(testData.url)
describe('medicaCreditBillApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/medical/medicaCreditBillApprove.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("medicaCreditBillApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/medical/medicaCreditBillApprove.xhtml")
        cy.wait(500)

        cy.wait(500)
        cy.get('tbody tr').contains('td', '1221').click()
        cy.wait(500)
        //
        cy.get('[id="frmMedicalBill:txtDecsion_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approve"]').click({ force: true })
        cy.wait(500)
        cy.get('[id="frmMedicalBill:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        

    })
    it("medicaCreditBillApprove first test", () => {

        cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/medical/medicalCreditBill.xhtml", 'hiwot', 1234);
        cy.get('[id="frmToolBar:btnNew"]').click({ force: true })
        cy.wait(500)
        cy.get('[data-label="Betezata Hospital"]').click({ force: true })
        cy.wait(500)
        //Invoice or Reference No:  
        cy.get('[id="frmMedicalBill:txtInvoiceNumber"]').type(1221)
        cy.wait(500)
        //Invoice Date: 
        cy.get('[id="frmMedicalBill:calInvoicedate"]').type("11/03/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        //txtAmount: 
        cy.get('[id="frmMedicalBill:txtAmount"]').clear().type("10000")
        cy.wait(500)
        //PatientID_input
        cy.get('[id="frmMedicalBill:srcPatientID_input"]').type(123)
        cy.wait(2000)
        cy.get('[data-item-label="123"]').click()
        cy.wait(500)
        //add button
        cy.get('[id="frmMedicalBill:btnAdd"]').click()
        cy.wait(500)
        //add button
        cy.get('[id="frmMedicalBill:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        cy.reload()
       
    })
})



