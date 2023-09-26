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
                    cy.loginCommand(https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingHistory.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
        it("` ${data.testName}`", () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingHistory.xhtml")
            cy.wait(500)
            //Filter Criteria
            cy.get('[id="frmUnplannedTrainingRequest:somFiliterByStatus_label"]').click()
            //clcik Load Request List
            cy.get('[data-label="Load Request List"]').click()
            //clcik any row from the table
            cy.get('table tbody tr').contains('td', 'someDep').click();
            //
            cy.get('[id="frmUnplannedTrainingRequest:txtParticipantId_input"]').type(123)
            cy.wait(5000)
            cy.get(`[data-item-value="123"]`).click()
            cy.wait(500)
            cy.get('[id="frmUnplannedTrainingRequest:btnAdd"]').click()
            cy.wait(1000)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Error!").should('contain', "The number 0f employee must equal with participant!")
        })
    })


// })

