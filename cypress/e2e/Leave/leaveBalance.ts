
import "../../support/auth.d.ts"

describe('leaveReturn test', () => {

        it(`there should visible be a table test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveBalance.xhtml", 'hiwot', 1234);
            cy.get('[id="frmLeaveBalance:txtYear_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="2031-2032"]`).eq(0).click({force: true});
            cy.get('tr').should('be.visible')

        })
    })




