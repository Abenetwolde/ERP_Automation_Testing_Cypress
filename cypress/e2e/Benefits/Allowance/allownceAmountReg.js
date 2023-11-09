
import "../../../support/auth.js"
// console.log(testData.url)
describe('appealApprove first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/allowance/allownceAmountReg.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("appealApprove first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/allowance/allownceAmountReg.xhtml")
        cy.wait(500)
        //Pay Location and Pay group:
        cy.get('[id="frmPayrollPeriod:drpJTitleJocLoc_label"]').click()
        cy.wait(500)
        cy.get('[data-label="[1 - 101 ] Description"]').eq(0).click()
        cy.wait(500)
        //Earnings:
        cy.get('[id="frmPayrollPeriod:drpEarningDed_label"]').click()
        cy.wait(500)
        cy.get('[data-label="All In JL"]').eq(0).click()
        cy.wait(500)
        //Job Level:
        cy.get('[id="frmPayrollPeriod:jobLevelId_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Middle Managers"]').eq(0).click()
        cy.wait(500)
        //Payment in:
        cy.get('[id="frmPayrollPeriod:PaymentInJobLevel_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Birr"]').eq(0).click()
        cy.wait(500)
        //amount
        cy.get('[id="frmPayrollPeriod:txtjlAmount"]').type(1000)
        cy.wait(500)
        //save button
        cy.get('[id="frmPayrollPeriod:btnSaveJoLevel"]').click()
        cy.wait(500)
         cy.get('table[role="gridcell"] tbody tr').contains('td', '[1 - 101 ] Description').should('be.visible')
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

