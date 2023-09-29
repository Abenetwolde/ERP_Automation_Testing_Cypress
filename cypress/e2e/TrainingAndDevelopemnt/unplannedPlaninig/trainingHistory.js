// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.js"
// console.log(testData.url)
describe('unplannedTrainingRequest testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingHistory.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("` ${data.testName}`", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingHistory.xhtml")
        cy.wait(500)
        //Budget Year:
        cy.get('[id="frmUnplannedTrainingRequest:plannedBudgetYear_label"]').click()
        //clcik Load Request List
        cy.get('[data-label="2014"]').click()
        //Training Needs:
        cy.get('[id="frmUnplannedTrainingRequest:plannedBudgetYear_label"]').click()
        //clcik Load Request List
        cy.get('[data-label="Architicture"]').click( {force: true})
        //clcik any row from the table
        cy.get('table[role="grid"] tbody tr').contains('td', 'fcmsAppFirstName').click();

        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //Training Status
        cy.get('[id="frmUnplannedTrainingRequest:txtDecision_label"]').type(123)
        cy.wait(5000)
        cy.get(`[data-label="Attending"]`).click()
        cy.wait(500)
        //save button
        cy.get('[id="frmUnplannedTrainingRequest:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

