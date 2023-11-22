
import "../../../support/auth.js"
// console.log(testData.url)
describe('medicaCreditBillApprove first testing ', () => {
    before(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/medical/medicalCashRefundApprove.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("medicalCashRefundApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/medical/medicalCashRefundApprove.xhtml");
        cy.wait(500)
        cy.get('tbody tr').contains('td', '123').click()
        cy.wait(500)
        //
        cy.get('[id="frmMedicalCashRefund:txtDecsion_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approve"]').click({ force: true })
        cy.wait(500)
        cy.get('[id="frmMedicalCashRefund:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        

    })
    it("medicalCashRefund request  first test", () => {

        cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/medical/medicalCashRefund.xhtml", 'hiwot', 1234);
        cy.wait(500)
        //Institution Name: 
        cy.get('[id="frmToolBar:btnNew"]').click({ force: true })
        cy.wait(500)
        cy.get('[id="frmMedicalCashRefund:txtPatientID_input"]').type(123)
        cy.wait(2000)
        cy.get('[data-item-label="123"]').click()
        cy.wait(500)
        //MedicalInstitution  
        cy.get('[id="frmMedicalCashRefund:txtMedicalInstitution"]').type("Medicalone")
        cy.wait(500)
        //txtReceiptNumber
        cy.get('[id="frmMedicalCashRefund:txtReceiptNumber"]').type("8011")
        cy.wait(500)
        //Amount
        cy.get('[id="frmMedicalCashRefund:txtAmount"]').clear().type("10000")
        cy.wait(500)
        //add button
        cy.get('[id="frmMedicalCashRefund:btnAdd"]').click()
        cy.wait(500)
        //add button
        cy.get('[id="frmMedicalCashRefund:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
       

    })
})



