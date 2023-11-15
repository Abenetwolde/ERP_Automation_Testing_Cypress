
import "../../../support/auth.js"
// console.log(testData.url)
describe('maintianInjuredEmployee first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/DiagnosisResult.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("maintianInjuredEmployee first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/DiagnosisResult.xhtml")
        cy.wait(500)
        //+ icon
        cy.get('[id="frmSample:btnNew"]').click()
        //click radio button
        cy.get('[id="frmRequest:rdemployetype:0"]').type("Alm")
        cy.wait(500)
        //Medical Expense: :
        cy.get('[id="frmRequest:txtExpense"]').type(122)
        cy.wait(500)
        //Reciept Number:
        cy.get('[id="frmRequest:txtExpense"]').type(11221)
        cy.wait(500)
        //Reciept Number:
        cy.get('[id="frmRequest:txtExpense"]').type(11221)
        cy.wait(500)
        //Add button
        cy.get('[id="frmRequest:btnAdd"]').click()
        cy.wait(500)
        cy.get('td').contains('a', 'Hide').click();
        // cy.get('[id="frmSuccessionplan:txtDate"]').type("{enter}")
        cy.wait(500)
        //Name Of Injury/Disease: :
        cy.get('[id="frmSuccessionplan:txtaInjury"]').type("Name Of Injury Disease")
        cy.wait(500)
        //Physician Name: :
        cy.get('[id="frmSuccessionplan:txtPhysician"]').type("Physician Name")
        cy.wait(500)
        //time:
        cy.get('[id="frmSuccessionplan:txtTime_input"]').type("03:00:00")
        cy.wait(500)
        cy.get('body').click();
        //Sick Leave
        cy.get('[id="frmSuccessionplan:txtSick"]').focus().type(12)
        cy.wait(500)
        //Precentage Of Damage: 
        cy.get('[id="frmSuccessionplan:txtPresent"]').type(45)
        cy.wait(500)
        cy.get('[id="frmSuccessionplan:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

    })
})


