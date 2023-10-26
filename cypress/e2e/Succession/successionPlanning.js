// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../support/auth.js"
// console.log(testData.url)
describe('successionPlanning testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/successionPlanning.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("successionPlanning Tests", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/succession/successionPlanning.xhtml")
        cy.wait(500)
        //positionsearch_label
        cy.get('table[role="grid"] tbody tr').contains('td', 'Administrative Assistant I').click({ force: true });
        ///Successor Strength:
        cy.get('[id="frmSuccessionplan:txtaStrength"]').type("Successor Strength")
        cy.wait(500)
        ///SDevelopment plan：
        cy.get('[id="frmSuccessionplan:txtaDevelop"]').type("Development plan")
        cy.wait(500)
        ///Readiness Time Frame：：
        cy.get('[id="frmSuccessionplan:drdReadiness_label"]').click()
        cy.wait(500)
        cy.get('[data-label="Ready with 12 Months"]').eq(0).click()
        cy.wait(500)
        ///Readiness Time Frame：：
        cy.get('[id="frmSuccessionplan:txtaneed"]').type("Development Needs")
        cy.wait(500)
        //clik pluse icon
        cy.get('[id="frmSuccessionplan:btnPlus"]').click()
        cy.wait(500)
               //Course Category:
               cy.get('[id="frmSuccessionplan:drdsomcatagor_label"]').click()
               cy.wait(500)
               cy.get('[data-label="Electrical"]').eq(0).click()
               cy.wait(500)

                      ///Training Course:
        cy.get('[id="frmSuccessionplan:drdTrain_panel"]').click({force: true} )
        cy.wait(500)
        cy.get('[data-label="IT Officer"]').eq(0).click({force: true})
        cy.wait(500)

               ///Start Time:
               cy.get('[id="frmSuccessionplan:txtStrdate"]').type("02/02/2015",{force: true})
               cy.wait(500)
                  //End Date:
                  cy.get('[id="frmSuccessionplan:txtEnddate"]').type("02/05/2015",{force: true})
                  cy.wait(500)

                     ///Sdd
               cy.get('[id="frmSuccessionplan:btnAdd"]').click({force: true})
               cy.wait(500)
              //update
               cy.get('[id="frmSuccessionplan:btnSave"]').click({force: true})
               cy.wait(500)
              
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

