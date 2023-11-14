
import "../../../support/auth.js"
// console.log(testData.url)
describe('maintianInjuredEmployee first testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/maintianInjuredEmployee.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    it("maintianInjuredEmployee first test", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/insurance/maintianInjuredEmployee.xhtml")
        cy.wait(500)
        //Employee Name:
        cy.get('[id="frmSample:btnNew"]').click()
        //Employee Name:
        cy.get('[id="frmRequest:fName_input"]').type("Alm")
        cy.wait(2000)
        //Notification Number:
        cy.get('[data-item-label="Almaz"]').click()
        cy.wait(500)
        cy.get('[id="frmRequest:Number"]').type(1233)
        //Informed Date:
        cy.get('[id="frmRequest:Informed"]').type("26/03/2016")
        cy.wait(500)

        //Insurance Provider:
        cy.get('[id="frmRequest:Provider_label"]').click()
        cy.wait(500)
        cy.get('[data-label="AwashInsurance"]').eq(0).click( {force: true})
        //Accident Happened:
        cy.get('[id="frmRequest:drdhappened_label"]').click()
        cy.wait(500)
        cy.get('[data-label="On Duty"]').click()
        //Accident Place:
        //Accident Date:
        cy.get('[id="frmRequest:Accident"]').type("26/02/2016")
        cy.get('[id="frmRequest:Place"]').type("addis")
        cy.wait(500)
        //Description of accident:
        cy.get('[id="frmRequest:Discription"]').type("Description")
        cy.wait(500)
        cy.get('[id="frmRequest:btnSave1"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

    })
})


// })

