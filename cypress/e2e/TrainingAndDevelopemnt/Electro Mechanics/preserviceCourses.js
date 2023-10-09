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
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/preserviceCourses.xhtml", 'hiwot', 1234);
                    //reusable login command
                }
  
            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("` ${data.testName}`", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/preserviceCourses.xhtml")
        cy.wait(500)
        // select Course Type
        cy.get('[id="frmEmployee:txtsName_label"]').click()
        //clcik Load Request List
        cy.get('[data-label="MainCourses"]').click()
        //clcik any row from the table
        cy.get('table[role="grid"] tbody tr').contains('td', 'computer scinece').click();

        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //select Course Type: 
        cy.get('[id="frmEmployee:txtcname_label"]').click()
        
        cy.get(`[data-label="MainCourses"]`).click({force: true})
        cy.wait(500)
        cy.get('[id="frmEmployee:txtconame"]').type("update")
        cy.wait(500)
        //save button
        cy.get('[id="frmEmployee:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */


        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/preserviceCourses.xhtml")
        cy.wait(500)
        // select Course Type
        cy.get('[id="frmEmployee:txtsName_label"]').click()
        //clcik Load Request List
        cy.get('[data-label="MainCourses"]').click()
        //clcik any row from the table
        cy.get('table[role="grid"] tbody tr').contains('td', 'update').click();

        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //select Course Type: 
        cy.get('[id="frmEmployee:txtcname_label"]').click()
        
        cy.get(`[data-label="MainCourses"]`).click({force: true})
        cy.wait(500)
        cy.get('[id="frmEmployee:txtconame"]').type("computer scinece")
        cy.wait(500)
        //save button
        cy.get('[id="frmEmployee:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

