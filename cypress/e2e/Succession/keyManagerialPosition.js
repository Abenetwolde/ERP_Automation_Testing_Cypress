// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../support/auth.js"
// console.log(testData.url)
describe('keyManagerialPosition testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/keyManagerialPosition.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("keyManagerialPosition Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/keyManagerialPosition.xhtml")
        cy.wait(500)
        //Department
        cy.get('[id="frmMainUI:deptsearchtxt_label"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="INSA"]').eq(0).click()
        cy.wait(500)
        //Key Managerial position
        cy.get('[id="frmMainUI:positionsearch_label"]').click()
        //clcik Semester
        cy.get('[data-label="Engineering"]').eq(0).click({force: true})


        cy.get('table[role="grid"] tbody tr').contains('td', 'INSA').click();
        cy.wait(2000)
        // status
        cy.get('[id="frmMainUI:txtJob"]').click()
        cy.wait(500)
        // selecte a year
        cy.get('[data-label="Engineering"]').eq(0).click({force: true})
        cy.wait(500)
        cy.get('[id="frmMainUI:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

