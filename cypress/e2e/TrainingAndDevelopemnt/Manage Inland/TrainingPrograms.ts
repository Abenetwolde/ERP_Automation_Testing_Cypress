// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.d.ts"
// console.log(testData.url)
describe('TrainingPrograms testing ', () => {

    // testData.SeveranceLiability.forEach((data, i) => {
    it("TrainingPrograms Tests", () => {
        cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/TrainingPrograms.xhtml", 'hiwot', 1234);
        cy.wait(500)
        //Filter Criteria:
        cy.get('[id="frmInlandAndForiegnTraining:somFiliterByStatus"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="Inland Trainings Programs"]').click({force:true})

        cy.get('table[role="grid"] tbody tr').contains('td', 'Yeka').click();
        cy.wait(1000)

        cy.get('[id="frmInlandAndForiegnTraining:selectedEmp_input"]').type("a")
        cy.wait(1000)
        cy.get('[data-item-value="Almaz"]').click()
        cy.wait(500)
        //type result
        cy.get('[id="frmInlandAndForiegnTraining:txtTotalResult"]').type("20")
        cy.wait(3000)
        //selecte status
        cy.get('[id="frmInlandAndForiegnTraining:txtstatus_label"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="Completed"]').click()
        //Add button
        cy.get('[id="frmInlandAndForiegnTraining:btnadd"]').click()
        cy.wait(5000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
        cy.get('[id="frmInlandAndForiegnTraining:btnSave"]').click()
        cy.wait(1000)
        // cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

