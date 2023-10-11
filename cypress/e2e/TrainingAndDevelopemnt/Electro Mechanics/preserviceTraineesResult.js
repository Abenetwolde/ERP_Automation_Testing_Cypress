// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.js"
// console.log(testData.url)
describe('preserviceTraineesResult testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/preserviceTraineesResult.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("preserviceTraineesResult testcase", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/preserviceTraineesResult.xhtml")
        cy.wait(500)
        // select Year
        cy.get('[id="frmPreService:txtSrchYear_label"]').click()
        //clcik Load Request List
        cy.wait(1000)
        cy.get('[data-label="2016"]').click();
        // Batch_label
        cy.get('[id="frmPreService:drdsBatch_label"]').click()
        //clcikBatch_label
        cy.wait(1000)
        cy.get('[data-label="11"]').click();
        //clcik any row from the table
        cy.get('table[role="grid"] tbody tr').contains('td', 'abe').click();
        cy.wait(500)
        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //write Trainee Name
        cy.get('[id="frmPreService:drdName_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Abebe"]').click()
        //write Training: :  
        cy.get('[id="frmPreService:drdTrain_label"]').click()
        cy.wait(500)
        cy.get('[data-label="electrical"]').click()
        //write Result:   : 
        cy.get('[id="frmPreService:txtResulet"]').type("result")

        //write Decision: 
        cy.get('[id="frmPreService:drdDecision_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Failed"]').click()

        cy.get('[id="frmPreService:btnAdd"]').click()
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
        cy.wait(500)


    })
})


// })

