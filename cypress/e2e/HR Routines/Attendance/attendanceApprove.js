
import "../../../support/auth.js"
// console.log(testData.url)
describe('appealApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/attendance/attendanceApprove.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("appealApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/attendance/attendanceApprove.xhtml")
        cy.wait(500)
        //Filter Criteria :
        cy.get('[id="frmRequest:somFiliterByStatus_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Load Requested List"]').click()
        cy.wait(1000)
        cy.get('table[role="grid"] tbody tr').contains('td', '02').click({force: true});
        cy.wait(500)
        //Decision:
        cy.get('[id="frmRequest:drddecision_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Approve"]').click()
        cy.wait(500)
        //given comment 
        cy.get('[id="frmRequest:calApprovedDate"]').type("14/02/2016")
        cy.get('[id="frmRequest:calApprovedDate"]').click()
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

