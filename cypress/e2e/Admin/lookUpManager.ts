
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('lookUpManager first testing ', () => {
    // before(() => {
    //     cy.session("JSESSIONID", () => {
    //         // Check if the "JSESSIONID" cookie is present
    //         cy.getCookie("JSESSIONID").then((cookie) => {
    //             // If the cookie is not present, log in
    //             if (!cookie) {
    //                 cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/address/addresses.xhtml", 'hiwot', 1234);
    //                 //reusable login command
    //             }

    //         })
    //     });
    // })

    it("lookUpManager first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/commonApplication/lookUpManager.xhtml")
        cy.wait(500)
        cy.get('[id="searchPaydEntryForm:selectSystem_label"]').click()
        cy.wait(500)
        cy.get('[data-label="HRMS"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'HR_LU_BANK_BRANCHES').click()
        cy.wait(3000)
        cy.get('[id="frmLookUp:tblLookUpDetail:btnAddNew"]').click()
        cy.wait(500)
        // cy.get('#frmAddressTree #btnSave .ui-button-text')

        cy.get('[id="frmLookUp:txtValue1"]').type("Branch Name")
        cy.wait(500)
        cy.get('[id="frmLookUp:txtValue2"]').type("2356")
        cy.wait(500)
        cy.get('[id="frmLookUp:btnAdd"]').click({force: true})
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



