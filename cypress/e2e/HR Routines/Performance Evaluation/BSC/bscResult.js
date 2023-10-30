// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../../support/auth.js"
// console.log(testData.url)
describe('bscResult first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/bscResult.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("bscResult first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/evaluation/bscResult.xhtml")
        cy.wait(500)
        //+ button
        cy.wait(500)
        cy.get('[id="frmSearch:btnTreeSrc"]').click()
        // click INSA
        cy.wait(500)
        cy.get('[id="frmSearch:j_idt72:0"]').click()
        //cancel
        cy.wait(500)
        cy.get('.ui-treenode-content.ui-tree-selectable').contains('1--INSA').click();
        cy.get('a.ui-dialog-titlebar-icon.ui-dialog-titlebar-close.ui-corner-all[role="button"]').click();

        // cy.get('[id="frmSearch:digDepSearch"]').click()
        //search button
        cy.wait(500)
        cy.get('[id="frmSearch:btnSearch"]').click()
        //clcik Load Request List
 
        cy.wait(500)
        cy.get('table[role="grid"] tbody tr').contains('td', 'INSA').click();
        cy.wait(500)
        //pluse icon for department
        cy.get('[id="frmBsc:btnTree"]').click()
        //click insa
        cy.wait(500)
        cy.get('.ui-treenode-content.ui-tree-selectable').contains('1--INSA').click();
        //search button
        cy.wait(500)
        // cy.get('a.ui-dialog-titlebar-icon.ui-dialog-titlebar-close.ui-corner-all[role="button"]').click();
        cy.wait(2000)
        cy.get('[id="frmBsc:txtEmployeeName_label"]').click()
        //clcik 
        cy.wait(500)
        cy.get('[data-label="fcmsAppFirstName desta abu"]').click()
        //update button
         //search button
         cy.wait(500)
         cy.get('[id="frmBsc:txtResult"]').type("Reset")
         cy.wait(500)
         cy.get('[id="frmBsc:btnAdd"]').click()
         cy.wait(500)
        cy.get('[id="frmBsc:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

