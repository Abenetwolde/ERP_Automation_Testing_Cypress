// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.d.ts"
// console.log(testData.url)
describe('unplannedTrainingApproval testing ', () => {

    // testData.SeveranceLiability.forEach((data, i) => {
        it("unplannedTrainingApproval", () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/unplannedTrainingApproval.xhtml", 'dagnachew', 1234);
            //reusable login command
            cy.wait(500)
            //Filter Criteria
            cy.get('[id="frmUnplannedTrainingRequest:somFiliterByStatus"]').click()
            //clcik Load Request List
            cy.get('[data-label="Load Request List"]').click()
            //clcik any row from the table
            //change everytime
            cy.get('table tbody tr').contains('td', 'INSA').click();
            //Decision
            cy.get('[id="frmUnplannedTrainingRequest:drddecision_label"]').click()
            cy.wait(1000)
            cy.get(`[data-label="Approve"]`).click()
            cy.wait(500)
            //coment given
            cy.get('[id="frmUnplannedTrainingRequest:txtComment"]').type("coment given")
            cy.wait(1000)
            cy.get('[id="frmUnplannedTrainingRequest:btnSave"]').click()
            cy.wait(1000)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
        })

    })


// })

