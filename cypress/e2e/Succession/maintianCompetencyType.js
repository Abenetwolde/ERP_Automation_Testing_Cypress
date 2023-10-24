// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../support/auth.js"
// console.log(testData.url)
describe('maintianCompetencyType testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/maintianCompetencyType.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("maintianCompetencyType Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/maintianCompetencyType.xhtml")
        cy.wait(500)
        //SrchCompetencyType
        cy.get('[id="frmRequest:txtSrchCompetencyType"]').type("a")
        //find button
        cy.get('[id="frmRequest:btnSearch"]').click()
        cy.wait(500)
        // cy.get('[id="frmRequest:autoCompetency_input"]').click("new")
        cy.wait(5000)
        cy.get('table[role="grid"] tbody tr').contains('td', 'ability to build model').click();
        cy.wait(3000)
        // update txtCompname_label
        cy.get('[id="frmRequest:txtCompname_label"]').click()
        cy.get('[data-label="new"]').click()
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

