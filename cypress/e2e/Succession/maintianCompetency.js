// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../support/auth.js"
// console.log(testData.url)
describe('Maintain Successor testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/maintianCompetency.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("Maintain Successor Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/maintianCompetency.xhtml")
        cy.wait(500)
        //Search By:
        cy.get('[id="frmRequest:drdCompetency_label"]').click()
        cy.get('[data-label="competency name"]').click()

        cy.get('[id="frmRequest:drdCompetency_label"]').type("new")

        cy.wait(5000)
        cy.get('[data-item-label="new"]').click()
    // cy.get('span.ui-autocomplete-query').contains('new').click();

        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'new').click();
        cy.wait(2000)
        // update txtDescription
        cy.get('[id="frmRequest:txtDescription"]').type("update")
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

