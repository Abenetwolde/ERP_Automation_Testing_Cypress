
import "../../../support/auth.js"
// console.log(testData.url)
describe('penalityForOffenseType first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/discipline/penalityForOffenseType.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("penalityForOffenseType first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/discipline/penalityForOffenseType.xhtml")
        cy.wait(500)
        //Offence Name: 
        cy.get('[id="frmOffensePenlity:plannedTrainingCourses_label"]').click()
        cy.wait(500)
        cy.get('[data-label="finaancial theft"]').click()
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'finaancial theft').click();
        cy.wait(500)
 

        cy.get('[id="frmOffensePenlity:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

