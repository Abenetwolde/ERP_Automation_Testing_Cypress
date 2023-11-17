
import "../../../support/auth.js"
// console.log(testData.url)
describe('insurancePayment first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/insurancePayment.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("insurancePayment first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/insurancePayment.xhtml")
        cy.wait(500)
        //+ icon
        cy.get('[id="frmSample:btnNew"]').click()
        cy.wait(500)
        cy.get('[for="frmRequest:rdemployetype:0"]').click()
        //Medical Expense:
        cy.wait(500)
        cy.get('[id="frmRequest:txtExpense"]').type("12298724")
        cy.wait(500)
         //Medical Expense:
         cy.get('[id="frmRequest:txtReciept"]').type("122131231323213")
         cy.wait(500)
        //Add
        cy.get('[id="frmRequest:btnAdd"]').click()
        cy.wait(500)
          //Add
          cy.get('[id="frmRequest:btnAdd"]').click()
          cy.wait(500)
        //Insurance Company:
        cy.get('[id="frmRequest:txtInsuranceCompany"]').type("testcompany")
        cy.wait(500)
         //Insurance Company:
         cy.get('[id="frmRequest:txtInsuranceBranch"]').type("branch")
         cy.wait(500)
        //Cheque Number:
        cy.get('[id="frmRequest:txtChequeNumber"]').type(121)
        cy.wait(500)
        //Account title:
        cy.get('[id="frmRequest:txtAccounttxttitle"]').type("testtitle")
        cy.wait(500)
        //Recieved Date:
        cy.get('[id="frmRequest:txtRecieved"]').type("06/03/2016")
        cy.wait(500)
        //BankBranch
        cy.get('[id="frmRequest:txtBankBranch"]').type("branchname")
        cy.wait(500)
        //Name Of Bank:
        cy.get('[id="frmRequest:txtNameOfBank"]').type("TestBank")
        cy.wait(500)
        //AccountNumber:
        cy.get('[id="frmRequest:txtAccountNumber"]').type(1223)
        cy.wait(500)
        //Commentw:
        cy.get('[id="frmRequest:txtCommentw"]').type("comment")
        cy.wait(500)
        //Approved date:
        cy.get('[id="frmRequest:txtApproved"]').type("05/03/2016")
        cy.wait(500)

        //Add button
        cy.get('[id="frmRequest:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

    })
})


