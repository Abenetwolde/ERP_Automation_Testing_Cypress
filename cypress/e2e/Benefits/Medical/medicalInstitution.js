
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
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/medical/medicalInstitution.xhtml")
        cy.wait(500)
        //Institution Name: 
        cy.get('[id="frmToolBar:btnNew"]').click()
        //Institution Name: 
        cy.wait(500)
        cy.get('[id="frmMedicalInstitution:txtInstitutionName"]').type("Institution Name")
        cy.wait(500)
        //Bank Selection:
        cy.get('[id="frmMedicalInstitution:txtBankName_label"]').click()
        cy.wait(500)
        cy.get('[data-label="ABAY BANK"]').click()
        cy.wait(500)
        //Specialization: 
        cy.get('[id="frmMedicalInstitution:txtSpeciliazation"]').type("Specialization")
        cy.wait(500)
        //Address: 
        cy.get('[id="frmMedicalInstitution:txtAddress"]').type("Address")
        cy.wait(500)
        cy.get('[id="frmMedicalInstitution:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        cy.reload()
        cy.wait(500)
        //Bank Selection:
        cy.get('[id="frmSearch:srcInstitutionName_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Institution Name"]').eq(0).click()
        cy.wait(500)
        cy.get('tbody tr').contains('td', 'Institution Name').click()
        cy.wait(500)
        cy.get('[id="frmMedicalInstitution:txtInstitutionName"]').type("InstitutionUpdate")
        cy.get('[id="frmMedicalInstitution:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

    })
})


// })

