// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.js"
// console.log(testData.url)
describe('EducationPrograms testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/EducationPrograms.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("EducationPrograms Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/EducationPrograms.xhtml")
        cy.wait(500)
        //Filter Criteria:
        cy.get('[id="frmInlandAndForiegnTraining:somFiliterByStatus"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="Inland Education Programs "]').click()

        cy.get('table[role="grid"] tbody tr').contains('td', 'Computer Science').click();
        cy.wait(5000)
        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //search employee by its name
        cy.get('[id="frmInlandAndForiegnTraining:selectedEmp_input"]').type("a")
        cy.wait(5000)
        cy.get('[data-item-value="Almaz"]').click()
        cy.wait(500)
        //type result
        cy.get('[id="frmInlandAndForiegnTraining:txtTotalResult"]').type(20)
        cy.wait(3000)
        //selecte status
        cy.get('[id="frmInlandAndForiegnTraining:txtstatus_label"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="Completed"]').click()
        //Add button
        cy.get('[id="frmInlandAndForiegnTraining:btnadd"]').click()
        cy.wait(5000)
        cy.get('[id="frmInlandAndForiegnTraining:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

