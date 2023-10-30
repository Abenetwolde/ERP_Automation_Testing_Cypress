// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../../support/auth.js"
// console.log(testData.url)
describe('bscSession first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/bscSession.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("bscSession first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/bscSession.xhtml")
        cy.wait(500)
        //Year
        cy.get('[id="frmSearch:somBudgetYear_label"]').click()
        //clcik Load Request List
        cy.get('[data-label="2014/2015"]').click()

        cy.get('table[role="grid"] tbody tr').contains('td', '2015').click();
        cy.wait(500)
        //update button
        cy.get('[id="frmBscSession:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

