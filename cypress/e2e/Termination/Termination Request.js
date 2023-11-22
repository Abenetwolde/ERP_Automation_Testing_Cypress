
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

    it("uniform first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/uniform/uniform.xhtml")
        cy.wait(500)
        // first remove OT Factor A to add new 
        cy.get('[id="frmHeader:btnNew"]').click()
        cy.wait(500)
        //
        cy.get('[id="frmUniform:somJob_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Accountant"]').eq(1).click({force: true})
        cy.wait(500)
        //CriteriaName_label
        cy.get('[id="frmUniform:somCategory_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Furnitures"]').eq(0).click()
        cy.wait(500)
        //somSubCategory_label
        cy.get('[id="frmUniform:somSubCategory_label"]').click()
        cy.wait(500)
        cy.get('[data-label="chair"]').eq(0).click()
        cy.wait(500)
        //somSubCategory_label
        cy.get('[id="frmUniform:somUniformItem_label"]').click()
        cy.wait(500)
        cy.get('[data-label="book"]').eq(0).click()
        cy.wait(500)
        //Quantity
        cy.get('[id="frmUniform:txtQuantity"]').type(12)
        cy.wait(500)
        //somYear_label
        cy.get('[id="frmUniform:somYear_label"]').click()
        cy.wait(500)
        cy.get('[data-label="1 years "]').click()
        cy.wait(500)
        cy.get('[id="frmUniform:btnAdd"]').click()
        cy.wait(500)
        cy.get('[id="frmUniform:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



