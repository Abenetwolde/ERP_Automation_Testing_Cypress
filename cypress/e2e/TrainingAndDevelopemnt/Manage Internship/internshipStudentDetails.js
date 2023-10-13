// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.js"
// console.log(testData.url)
describe('maintainUniversity testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipStudentDetails.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("maintainUniversity Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipStudentDetails.xhtml")
        cy.wait(500)
        //Unversity
        cy.get('[id="frmUniversity:drdUniversity_label"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="AASTUu ww"]').click()

        cy.get('table[role="grid"] tbody tr').contains('td', 'AASTUu ww').click();
        cy.wait(5000)
        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //search employee by its name
        cy.get('[id="frmUniversity:txtOfficeNumber"]').clear().type("+251912345432")
       
        cy.get('[id="frmUniversity:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

