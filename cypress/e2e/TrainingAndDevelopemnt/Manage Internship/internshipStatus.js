// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.js"
// console.log(testData.url)
describe('internshipStatus testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipStatus.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("internshipStatus Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipStatus.xhtml")
        cy.wait(500)
        //year_label
        cy.get('[id="frmPlacementStatus:txtyear_label"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="2016"]').click()
        cy.wait(500)
        //year_label
        cy.get('[id="frmPlacementStatus:txtSemester_label"]').click()
        //clcik Semester
        cy.get('[data-label="3"]').click()


        cy.get('table[role="grid"] tbody tr').contains('td', 'debark').click();
        cy.wait(1000)
        // status
        cy.get('[id="frmPlacementStatus:tblPaymentditails:0:drdPayStatus_label"]').click()
        cy.wait(500)
        // selecte a year
        cy.get('[data-label="Complete"]').click()
    
        // cy.get('[data-label="fetene"]').click({force: true})
        // cy.wait(500)
        //add save
        cy.get('[id="frmPlacementStatus:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

