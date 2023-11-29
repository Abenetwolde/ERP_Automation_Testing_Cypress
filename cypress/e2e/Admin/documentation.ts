
import "../../support/auth.d.ts"
// console.log(testData.url)
describe('documentation Page Rendering Test ', () => {
    it("documentation Page Rendering Test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/documentation.xhtml")
        cy.wait(500)
        cy.get('introduction').should('be.visible')
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
  
})



