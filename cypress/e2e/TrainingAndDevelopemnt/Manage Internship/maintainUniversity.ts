
import "../../../support/auth.d.ts"
// console.log(testData.url)
describe('maintainUniversity testing ', () => {

    it("maintainUniversity Tests", () => {
        cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/maintainUniversity.xhtml", 'hiwot', 1234);
        cy.wait(500)
        //Unversity
        cy.get('[id="frmUniversity:drdUniversity_label"]').click()
        //clcik Inland Education Programs 
        cy.get('[data-label="AASTUu ww"]').click()

        cy.get('table[role="grid"] tbody tr').contains('td', 'AASTUu ww').click();
        cy.wait(5000)
        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //search employee by its name
        cy.get('[id="frmUniversity:txtOfficeNumber"]').clear().type("+251912345432")
       
        cy.get('[id="frmUniversity:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

