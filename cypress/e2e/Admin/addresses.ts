
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('retirementApprove first testing ', () => {
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

    it("addresses first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/address/addresses.xhtml")
        cy.wait(500)
        cy.get('[id="frmAddressTree:ckbAllCountry"]').click()
        cy.wait(500)
        cy.get('[id="addressNav:addressTree:0"]').click()
        cy.wait(500)
        cy.get('.ui-tree-toggler').click()
        cy.wait(500)
        cy.get('[id="addressNav:addressTree:0_30:nodetxt"]').click()
        cy.wait(500)
        // cy.get('#frmAddressTree #btnSave .ui-button-text')

        cy.get('[id="frmAddressTree:btnNew"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



