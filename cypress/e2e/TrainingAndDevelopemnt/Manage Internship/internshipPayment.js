// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.js"
// console.log(testData.url)
describe('internshipPayment testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipPayment.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("internshipPayment Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipPayment.xhtml")
        cy.wait(500)
        //Reference Letter: 
        cy.get('[id="frmPlacementStatus:drdsSemester_label"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="ref001q"]').click()

        cy.get('table[role="grid"] tbody tr').contains('td', 'ref001q').click();
        cy.wait(1000)
        // Year:
        cy.get('[id="frmPlacementStatus:txtyear_label"]').click()
        cy.wait(500)
        // selecte a year
        cy.get('[data-label="2009"]').click()
        // Semester:
        cy.get('[id="frmPlacementStatus:txtSemester_label"]').click()
        cy.wait(500)
        // selecte a year
        cy.get('[data-label="1"]').click({force: true})
        // Placed Student: 
        cy.wait(500)
        cy.get('[id="frmPlacementStatus:txtIStudentsName_label"]').click({force: true})
        cy.wait(500)
        // selecte a year
        cy.get('[data-label="fetene"]').click({force: true})
        cy.wait(500)

        //type Amount
        cy.get('[id="frmPlacementStatus:txtAmount"]').type(123445)
        cy.wait(500)
        //add button
        cy.get('[id="frmPlacementStatus:btnAdd"]').click()
        cy.wait(500)
        //add button
        cy.get('[id="frmPlacementStatus:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

