
import "../../../support/auth.js"
// console.log(testData.url)
describe('penalitys first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/discipline/penalitys.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("penalitys first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/discipline/penalitys.xhtml")
        cy.wait(500)
        //Search By:
        cy.get('[id="frmPenality:drdpenalty_label"]').click()
        cy.wait(500)
        cy.get('[data-label="penalty code"]').click()
        cy.wait(500)
        cy.get('[id="frmPenality:autoPenalty_input"]').type(`110`);
        cy.wait(1000)
        cy.get('[id="frmPenality:autoPenalty_input"]').type(`{enter}`);
        cy.get('table[role="grid"] tbody tr').contains('td', '110').click();
        cy.wait(500)
 

        cy.get('[id="frmPenality:btnSavea"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

