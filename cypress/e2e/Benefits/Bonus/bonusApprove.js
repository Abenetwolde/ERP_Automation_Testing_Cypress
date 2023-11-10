
import "../../../support/auth.js"
// console.log(testData.url)
describe('appealApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/bonusPayment/bonusApprove.xhtml", 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("bonusApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/bonusPayment/bonusApprove.xhtml")
        cy.wait(500)
        //Filter Criteria::
        cy.get('[id="frmRequest:somFiliterByStatus1_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Rejected List"]').click()
        cy.wait(500)
        //select a data from table
        cy.get('table[role="grid"] tbody tr').contains('td', '2014').click();
        //approve
        cy.get('[id="frmRequest:drddecision_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approve"]').click()
        cy.wait(500)
        //save button
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        cy.reload()
//rejecting 
        //Filter Criteria::
        cy.get('[id="frmRequest:somFiliterByStatus1_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Approved List"]').click()
        cy.wait(500)
        //select a data from table
        cy.get('table[role="grid"] tbody tr').contains('td', '2014').click();
        //approve
        cy.get('[id="frmRequest:drddecision_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Reject"]').click()
        cy.wait(500)
        //save button
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */


    })
})


// })

