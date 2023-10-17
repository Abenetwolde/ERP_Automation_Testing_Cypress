
import "../../../support/auth.js"
// console.log(testData.url)
describe('internshipPlacement testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipPlacement.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("internshipPlacement Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipPlacement.xhtml")
        cy.wait(500)
        //student name
        cy.get('[id="frmStudPlacement:txtSrchName"]').type("a")
        // find button
        cy.get('[id="frmStudPlacement:btnSearch"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

