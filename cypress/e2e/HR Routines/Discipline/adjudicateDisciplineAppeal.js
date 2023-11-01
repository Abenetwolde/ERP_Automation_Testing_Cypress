
import "../../../support/auth.js"
// console.log(testData.url)
describe('adjudicateDisciplineAppeal first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/discipline/adjudicateDisciplineAppeal.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("adjudicateDisciplineAppeal first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/discipline/adjudicateDisciplineAppeal.xhtml")
        cy.get('table[role="grid"] tbody tr').contains('td', 'Alemu').click();
        cy.wait(500)
         //decision_label
         cy.get('[id="frmDisciplineApprove:drddecision_label"]').click()
         cy.wait(500)
         cy.get('[data-label="Accept"]').click()

        cy.get('[id="frmDisciplineApprove:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

